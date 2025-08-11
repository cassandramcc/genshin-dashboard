package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/tidwall/gjson"
	"github.com/tidwall/sjson"
)

// App struct
type App struct {
	ctx        context.Context
	Characters map[string]*Character
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		Characters: getCharactersFromDB(),
	}
}

func getCharactersFromDB() map[string]*Character {
	characters := make(map[string]*Character)
	data, err := os.ReadFile("characters.json")
	if err != nil {
		log.Fatalf("failed to read characters.json: %v", err)
	}

	if err := json.Unmarshal(data, &characters); err != nil {
		log.Fatalf("failed to unmarshal characters.json: %v", err)
	}
	fmt.Printf("Loaded characters: %v\n", characters)
	return characters
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetCharacters() map[string]*Character {
	return a.Characters
}

func (a *App) AddCharacter(character *Character) map[string]*Character {
	fmt.Println("Adding character:", character)
	a.Characters[strings.ToLower(character.Name)] = character
	data, err := json.MarshalIndent(a.Characters, "", "  ")
	if err != nil {
		log.Fatalf("failed to marshal characters: %v", err)
		return nil
	}
	if err := os.WriteFile("characters-new.json", data, 0644); err != nil {
		log.Fatalf("failed to write characters-new.json, not overwriting old file: %v", err)
		return nil
	}
	// overwrite the old file
	if err := os.Rename("characters-new.json", "characters.json"); err != nil {
		log.Fatalf("failed to rename characters-new.json to characters.json: %v", err)
		return nil
	}

	// Update the in-memory characters to match the file
	a.Characters = getCharactersFromDB()
	return a.Characters
}

func (a *App) UpdateCharacter(path string, value float32) map[string]*Character {
	fmt.Printf("Updating character at path %s with value %f\n", path, value)

	currentData, err := os.ReadFile("characters.json")
	if err != nil {
		log.Fatalf("failed to read characters.json: %v", err)
		return nil
	}

	result := gjson.GetBytes(currentData, path)
	if !result.Exists() {
		log.Fatalf("Updating a character which doesn't exist at path: %s", path)
		return nil
	}

	newData, err := sjson.SetBytes(currentData, path, value)
	if err != nil {
		log.Fatalf("failed to update characters.json: %v", err)
		return nil
	}

	if err := os.WriteFile("characters-new.json", newData, 0644); err != nil {
		log.Fatalf("failed to write characters-new.json, not overwriting old file: %v", err)
		return nil
	}

	// overwrite the old file
	if err := os.Rename("characters-new.json", "characters.json"); err != nil {
		log.Fatalf("failed to rename characters-new.json to characters.json: %v", err)
		return nil
	}

	// Update the in-memory characters to match the file
	a.Characters = getCharactersFromDB()
	return a.Characters
}

func (a *App) DeleteCharacter(name string) map[string]*Character {
	fmt.Printf("Deleting character: %s\n", name)
	if _, exists := a.Characters[strings.ToLower(name)]; !exists {
		log.Fatalf("Character %s does not exist", name)
		return nil
	}

	delete(a.Characters, strings.ToLower(name))
	data, err := json.MarshalIndent(a.Characters, "", "  ")
	if err != nil {
		log.Fatalf("failed to marshal characters: %v", err)
		return nil
	}
	if err := os.WriteFile("characters-new.json", data, 0644); err != nil {
		log.Fatalf("failed to write characters-new.json, not overwriting old file: %v", err)
		return nil
	}
	// overwrite the old file
	if err := os.Rename("characters-new.json", "characters.json"); err != nil {
		log.Fatalf("failed to rename characters-new.json to characters.json: %v", err)
		return nil
	}
	// Update the in-memory characters to match the file
	a.Characters = getCharactersFromDB()
	return a.Characters
}

package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
)

// App struct
type App struct {
	ctx        context.Context
	Characters []*Character
}

// NewApp creates a new App application struct
func NewApp() *App {
	var characters []*Character
	data, err := os.ReadFile("characters.json")
	if err != nil {
		log.Fatalf("failed to read characters.json: %v", err)
	}

	if err := json.Unmarshal(data, &characters); err != nil {
		log.Fatalf("failed to unmarshal characters.json: %v", err)
	}
	return &App{
		Characters: characters,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetCharacters() []*Character {
	return a.Characters
}

func (a *App) AddCharacter(character *Character) {
	fmt.Println("Adding character:", character)
	a.Characters = append(a.Characters, character)
	data, err := json.MarshalIndent(a.Characters, "", "  ")
	if err != nil {
		log.Fatalf("failed to marshal characters: %v", err)
	}
	if err := os.WriteFile("characters-new.json", data, 0644); err != nil {
		log.Fatalf("failed to write characters-new.json, not overwriting old file: %v", err)
		return
	}
	// overwrite the old file
	if err := os.Rename("characters-new.json", "characters.json"); err != nil {
		log.Fatalf("failed to rename characters-new.json to characters.json: %v", err)
	}
}

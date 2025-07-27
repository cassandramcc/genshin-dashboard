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
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time", name)
}

func (a *App) GetCharacters() []*Character {
	var characters []*Character
	data, err := os.ReadFile("characters.json")
	if err != nil {
		log.Fatalf("failed to read characters.json: %v", err)
	}

	if err := json.Unmarshal(data, &characters); err != nil {
		log.Fatalf("failed to unmarshal characters.json: %v", err)
	}
	return characters
}

func (a *App) ConvertElementToIcon(element Element) string {
	switch element {
	case Anemo:
		return "/assets/images/anemo.png"
	case Geo:
		return "/assets/images/geo.png"
	case Electro:
		return "/assets/images/electro.png"
	case Dendro:
		return "/assets/images/dendro.png"
	case Hydro:
		return "/assets/images/hydro.png"
	case Pyro:
		return "/assets/images/pyro.png"
	case Cryo:
		return "/assets/images/cryo.png"
	default:
		return "/assets/images/unknown.png"
	}
}

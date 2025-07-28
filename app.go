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

var (
	red    = [4]float32{204, 50, 50, 1}
	yellow = [4]float32{231, 180, 22, 1}
	green  = [4]float32{78, 197, 49, 1}
	blue   = [4]float32{25, 25, 164, 1}
)

func (a *App) G_ChooseColour(percentage float32) []float32 {
	fmt.Println(percentage)
	switch {
	case percentage <= 0.5:
		return a.interpolate(red, yellow, percentage)
	case percentage <= 1:
		return a.interpolate(yellow, green, percentage)
	default:
		return a.interpolate(green, blue, percentage)
	}
}

func (a *App) interpolate(colour1, colour2 [4]float32, percentage float32) []float32 {
	difference := make([]float32, len(colour1))
	for i := 0; i < len(colour1); i++ {
		difference[i] = colour2[i] - colour1[i]
	}
	var scaled []float32
	for _, x := range difference {
		scaled = append(scaled, percentage*x)
	}
	output := make([]float32, len(colour1))
	for i := 0; i < len(colour1); i++ {
		output[i] = colour1[i] * scaled[i]
	}
	return output
}

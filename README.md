# 🎨An Introduction To App Design Using Tailwind Classes

## The App
We'll be taking a look at Three Strikes Bowling Alley Shop's React application. Components we will focus on for this walkthrough are:
- **index.css** -> Tailwind directives at highest level for styling
- **App.js** -> Render Card and Header components
- **Card.js**
- **Header.js**

## Initial State Data
Here is the initial state data we'll apply style to:
```
[
    {
      title: "Rogue Blade",
      image: RogueImage,
      price: "250",
      description: "Trusted over the years by professional bowlers. All the serious bowlers prefer Rogue."
    },
    {
      title: "Eleven",
      image: ElevenImage,
      price: "180",
      description: "Simple yet effective. A sleeper that will keep you in the lead."
    }
]
```

## Initial Setup

### React
- [x] Import images in App
- [x] useState hook with initial state data
- [x] Map over state data to create Card components
- [x] App renders Card and Header components

### Tailwind Installation process
- [x] Install Tailwind CSS
- [x] Configure template paths
- [x] Add Taildwind directives to CSS

## We Do
- [ ] Review how Tailwind directives affect default styling
- [ ] Review tailwind.config.js
- [ ] Use Tailwind classes to style Card and Header components
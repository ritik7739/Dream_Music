# 🎵 Dream Music

Dream Music is a sleek and responsive music player interface built using React.js and Material-UI. It features a clean design inspired by popular music streaming platforms, allowing users to explore, play, and manage their favorite tracks with ease.

## 🚀 Features

- *Responsive Navigation*: Includes a sticky sidebar with easy access to different sections like Home, Trends, Library, and Discover.
- *Artist Info Section*: Display detailed information about the artist with a dynamic background and verified artist badge.
- *Draggable Playlist*: A drag-and-drop enabled playlist where you can reorder songs. The currently playing song is highlighted.
- *Now Playing Card*: Displays the current track with playback controls, a progress slider, and options for repeat and shuffle.
- *Howler Integration*: Utilizes the Howler.js library to manage audio playback, providing smooth and efficient controls.

## 🛠 Technologies Used

- *React.js*: A JavaScript library for building user interfaces.
- *Material-UI*: React components that implement Google’s Material Design.
- *Howler.js*: A JavaScript audio library that simplifies audio control in modern browsers.
- *React-DnD*: A set of React utilities to build complex drag and drop interfaces.

## 📂 Project Structure

The project is organized as follows:


Dream_Music/
├── src/
│   ├── assets/                    # Contains images and other static assets
│   ├── components/                # React components
│   │   ├── ArtistInfo.jsx         # Displays artist information and includes the navbar
│   │   ├── MainContent.jsx        # Manages and displays the draggable playlist
│   │   ├── NowPlaying.jsx         # Controls and displays the currently playing song
│   │   └── Sidebar.jsx            # Sticky sidebar with navigation options
│   └── App.js                     # Main application component
├── public/                        # Public directory for static files
├── .gitignore                     # Git ignore file
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation


## 🖼 Screenshots

### Artist Info Section
![Artist Info](https://drive.google.com/file/d/1iUuJb5RsnNu6SEz4lNamtuoCPu0X4398/view?usp=sharing)

### Draggable Playlist
![Draggable Playlist](https://drive.google.com/file/d/1NBf4La41GlSzEyvYfV4a2ULrzf2HH2qi/view?usp=drive_link)

### Now Playing Card
![Now Playing Card](https://drive.google.com/file/d/1jhLMpz9iW_NITSTXbU-zX6xcQxmBnXNR/view?usp=drive_link)

## 🔧 Setup & Installation

1. *Clone the repository*:
   bash
   git clone https://github.com/ritik7739/Dream_Music.git
   cd Dream_Music
   

2. *Install dependencies*:
   bash
   npm install
   

3. *Run the development server*:
   bash
   npm run dev
   

4. *Build the project*:
   bash
   npm run build
   

5. *Run tests*:
   bash
   npm test
   

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

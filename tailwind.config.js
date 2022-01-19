module.exports = {
  mode: "jit",
  purge: ["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobilesm ': '440px',
        // => @media (min-width: 640px) { ... }
  
        
      },
      backgroundImage: {
        'bg-lg': "url('https://www-growth.scdn.co/static/home/bursts.svg')",
        'bg-md': "url('https://www-growth.scdn.co/static/home/bursts-tablet.svg')",
        'bg-sm': "url('https://www-growth.scdn.co/static/home/bursts-mobile.svg')",
       },
      fontSize: {
        spotifyLg: "10rem",
      },
      colors: {
        spotifyGreen: "#1ed760",
        spotifyBlack: "#000",
        spotifyBlue: "#2a3cab",
        premiumBlue:"#1d75de",
        supportGreen:"#117a37",
        downloadGreen:"#19e68c",
        facebookBlue:'#4267B2'
      },
      fontFamily: {

        spotify: ["Circular Spotify Tx T Black"],
        spotifyLight: ["Circular Spotify Tx T Light"],
        spotifyBook: ["Circular Spotify Tx T Book"],
        spotifyBold: ["Circular Spotify Tx T Bold"],
        spotifyMedium: ["Circular Spotify Tx T Med"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

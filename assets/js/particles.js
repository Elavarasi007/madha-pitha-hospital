particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3, random: true },

    line_linked: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: { enable: false }
    }
  },

  interactivity: {
    detect_on: "window",   // 🔥 IMPORTANT (not canvas)

    events: {
      onhover: {
  enable: true,
  mode: ["grab", "bubble"]
},
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },

    modes: {
      repulse: {
        distance: 150,   // 🔥 increase for stronger effect
        duration: 0.4
      },

      grab: {
        distance: 200,
        line_linked: { opacity: 1 }
      },

      push: {
        particles_nb: 5
      }
    }
  },

  retina_detect: true
});
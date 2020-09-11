module.exports = {
    transform: {
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
        "^.+\\.test.js?$": "babel-jest"
    }
}

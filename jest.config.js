module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        ".(html)$": "html-loader-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/widgets/jestmocks/htmlMocks.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "html"],
    collectCoverage: false
};
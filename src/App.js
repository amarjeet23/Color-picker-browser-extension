// import logo from './logo.svg';
import "./App.css";
import React from "react";

function App() {
    const [grayList, setGraylist] = React.useState([
        // Gray
        { id: 3, code: "#F9FAFB", name: "Gray" },
        { id: 4, code: "#F3F4F6", name: "Gray" },
        { id: 5, code: "#E5E7EB", name: "Gray" },
        { id: 6, code: "#D1D5DB", name: "Gray" },
        { id: 7, code: "#9CA3AF", name: "Gray" },
        { id: 8, code: "#6B7280", name: "Gray" },
        { id: 9, code: "#4B5563", name: "Gray" },
        { id: 10, code: "#374151", name: "Gray" },
        { id: 11, code: "#1F2937", name: "Gray" },
        { id: 12, code: "#111827", name: "Gray" }
    ]);
    // Red
    const [redList, setRedlist] = React.useState([
        { id: 13, code: "#FEF2F2", name: "Red" },
        { id: 14, code: "#FEE2E2", name: "Red" },
        { id: 15, code: "#FECACA", name: "Red" },
        { id: 16, code: "#FCA5A5", name: "Red" },
        { id: 17, code: "#F87171", name: "Red" },
        { id: 18, code: "#EF4444", name: "Red" },
        { id: 19, code: "#DC2626", name: "Red" },
        { id: 20, code: "#B91C1C", name: "Red" },
        { id: 21, code: "#991B1B", name: "Red" },
        { id: 22, code: "#7F1D1D", name: "Red" }
    ]);
    // Yellow

    const [yellowList, setYellowlist] = React.useState([
        { id: 23, code: "#FFFBEB", name: "Yellow" },
        { id: 24, code: "#FEF3C7", name: "Yellow" },
        { id: 25, code: "#FDE68A", name: "Yellow" },
        { id: 26, code: "#FCD34D", name: "Yellow" },
        { id: 27, code: "#FBBF24", name: "Yellow" },
        { id: 28, code: "#F59E0B", name: "Yellow" },
        { id: 29, code: "#D97706", name: "Yellow" },
        { id: 30, code: "#B45309", name: "Yellow" },
        { id: 31, code: "#92400E", name: "Yellow" },
        { id: 32, code: "#78350F", name: "Yellow" }
    ]);

    // Green

    const [greenList, setGreenlist] = React.useState([
        { id: 33, code: "#ECFDF5", name: "Green" },
        { id: 34, code: "#D1FAE5", name: "Green" },
        { id: 35, code: "#A7F3D0", name: "Green" },
        { id: 36, code: "#6EE7B7", name: "Green" },
        { id: 37, code: "#34D399", name: "Green" },
        { id: 38, code: "#10B981", name: "Green" },
        { id: 39, code: "#059669", name: "Green" },
        { id: 40, code: "#047857", name: "Green" },
        { id: 41, code: "#065F46", name: "Green" },
        { id: 42, code: "#064E3B", name: "Green" }
    ]);
    // Blue
    const [blueList, setBluelist] = React.useState([
        { id: 43, code: "#EFF6FF", name: "Blue" },
        { id: 44, code: "#DBEAFE", name: "Blue" },
        { id: 45, code: "#BFDBFE", name: "Blue" },
        { id: 46, code: "#93C5FD", name: "Blue" },
        { id: 47, code: "#60A5FA", name: "Blue" },
        { id: 48, code: "#3B82F6", name: "Blue" },
        { id: 49, code: "#2563EB", name: "Blue" },
        { id: 50, code: "#1D4ED8", name: "Blue" },
        { id: 51, code: "#1E40AF", name: "Blue" },
        { id: 52, code: "#1E3A8A", name: "Blue" }
    ]);

    // Indigo
    const [indigoList, setIndigolist] = React.useState([
        { id: 53, code: "#EEF2FF", name: "Indigo" },
        { id: 54, code: "#E0E7FF", name: "Indigo" },
        { id: 55, code: "#C7D2FE", name: "Indigo" },
        { id: 56, code: "#A5B4FC", name: "Indigo" },
        { id: 57, code: "#818CF8", name: "Indigo" },
        { id: 58, code: "#6366F1", name: "Indigo" },
        { id: 59, code: "#4F46E5", name: "Indigo" },
        { id: 60, code: "#4338CA", name: "Indigo" },
        { id: 61, code: "#3730A3", name: "Indigo" },
        { id: 62, code: "#312E81", name: "Indigo" }
    ]);

    // Purple
    const [purpleList, setPurplelist] = React.useState([
        { id: 63, code: "#F5F3FF", name: "Purple" },
        { id: 64, code: "#EDE9FE", name: "Purple" },
        { id: 65, code: "#DDD6FE", name: "Purple" },
        { id: 66, code: "#C4B5FD", name: "Purple" },
        { id: 67, code: "#A78BFA", name: "Purple" },
        { id: 68, code: "#8B5CF6", name: "Purple" },
        { id: 69, code: "#7C3AED", name: "Purple" },
        { id: 70, code: "#6D28D9", name: "Purple" },
        { id: 71, code: "#5B21B6", name: "Purple" },
        { id: 72, code: "#4C1D95", name: "Purple" }
    ]);

    // Pink
    const [pinkList, setPinklist] = React.useState([
        { id: 73, code: "#FDF2F8", name: "Pink" },
        { id: 74, code: "#FCE7F3", name: "Pink" },
        { id: 75, code: "#FBCFE8", name: "Pink" },
        { id: 76, code: "#F9A8D4", name: "Pink" },
        { id: 77, code: "#F472B6", name: "Pink" },
        { id: 78, code: "#EC4899", name: "Pink" },
        { id: 79, code: "#DB2777", name: "Pink" },
        { id: 70, code: "#BE185D", name: "Pink" },
        { id: 71, code: "#9D174D", name: "Pink" },
        { id: 72, code: "#831843", name: "Pink" }
    ]);
    const [search, setSearch] = React.useState("");
    const [currentColor, setCurrentcolor] = React.useState("#ffff");
    const setColor = (color) => {
        setCurrentcolor(color);
        var copyText = color;
        navigator.clipboard.writeText(copyText);
    };
    const displayListColor = (list) => {
        let filteredItem = [];
        list.forEach((item) => {
            if (
                item.name
                    .toLocaleUpperCase()
                    .includes(search.toLocaleUpperCase())
            ) {
                filteredItem.push(item);
            }
        });
        return filteredItem.map((color) => {
            return (
               <div key={color.id}>
                    <div
                    className="color-item"
                    onClick={() => setColor(color.code)}
                    style={{ backgroundColor: `${color.code}` }}
                >
                </div>
                <span className="color-code">{color.code}</span>
               </div>
                
            );
        });
    };
    return (
        <div className="main">
            <div
                className="header"
                style={{ backgroundColor: currentColor }}
            ></div>
            <input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="color-block">
            <span>click on color to copy</span>
                {displayListColor(grayList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Gray</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(grayList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(redList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Red</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(redList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(yellowList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Yellow</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(yellowList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(greenList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Green</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(greenList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(blueList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Blue</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(blueList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(indigoList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Indigo</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(indigoList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(purpleList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Purple</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(purpleList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {displayListColor(pinkList).length > 0 ? (
                    <div className="color-list">
                        <div className="color-title">
                            <span>Pink</span>
                        </div>
                        <div className="color-body">
                            {displayListColor(pinkList)}
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <span> &copy;Amarjeet</span>
        </div>
    );
}

export default App;

import { stackData } from "../data";
import * as SiIcons from "react-icons/si"; // Import all icons from react-icons/si

const TechStackList = ({ limit }) => {
    const displayedStack = limit ? stackData.slice(0, limit) : stackData;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedStack.map((tool) => {
                const Icon = SiIcons[tool.icon];

                return (
                    <div
                        key={tool.id}
                        className="flex items-center gap-4 p-4 border border-border rounded-2xl hover:bg-border transition-colors duration-300 group"
                    >
                        {/* Icon Box */}
                        <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: tool.color + "20" }}
                            // Adding "20" to the hex color gives it 12% opacity
                            // So the background is a very subtle tint of the icon color
                        >
                            {Icon && (
                                <Icon size={28} style={{ color: tool.color }} />
                            )}
                        </div>

                        {/* Tool Info */}
                        <div>
                            <h3 className="text-text-primary font-bold text-lg group-hover:text-accent transition-colors duration-300">
                                {tool.name}
                            </h3>
                            <p className="text-text-muted text-sm">
                                {tool.category}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TechStackList;

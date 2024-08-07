import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export const ShowArticle = () => {
    const loc = useLocation();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(loc.state?.data || {});
    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            try {
                // Replace with actual data fetching logic
                const response = await fetch('your-api-endpoint');
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error("Failed to fetch data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        document.title = data?.title || "Article";
        document.querySelector('meta[name="description"]').setAttribute("content", data?.summary || "Article summary.");
    }, [data]);
    if (loading) return <div className="text-center p-4">Loading...</div>;
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50">
            {/* Article Title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">{data?.title || "Article Title"}</h1>
            </div>
            {/* Main Content and Image */}
            <div className="flex flex-col md:flex-row gap-8 my-10">
                <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {data?.content || "Placeholder text for the article content."}
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img
                        src={data?.imageUrl || "https://via.placeholder.com/300"}
                        alt={data?.imageDescription || "Descriptive alt text"}
                        className="border-2 border-gray-300 rounded-lg shadow-lg h-72 w-72 object-cover"
                    />
                </div>
            </div>
            {/* Additional Content Area with Image */}
            <div className="border-2 border-gray-300 rounded-lg mb-8 p-4 bg-white shadow-md">
                <img
                    src={data?.additionalImageUrl || "https://via.placeholder.com/500"}
                    alt={data?.additionalImageDescription || "Additional content image"}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">{data?.additionalContent || "Additional content area."}</p>
            </div>
            {/* Photo Gallery Section */}
            <div className="my-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Photo Gallery</h2>
                <div className="flex justify-between gap-4">
                    {[data?.photo1, data?.photo2, data?.photo3].map((url, index) => (
                        <div key={index} className="flex-1">
                            <img
                                src={url || "https://via.placeholder.com/300"}
                                alt={`Gallery photo ${index + 1}`}
                                className="w-full h-48 object-cover border-2 border-gray-300 rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Another Additional Content Area */}
            <div className="border-2 border-gray-300 rounded-lg mb-8 p-4 bg-white shadow-md">
                <p className="text-gray-600">{data?.anotherAdditionalContent || "Another additional content area."}</p>
            </div>
            {/* Comments Section */}
            <div className="my-8 p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold">Comments</h2>
                <textarea
                    className="w-full border border-gray-300 rounded-lg p-2 my-2"
                    placeholder="Leave a comment..."
                ></textarea>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
            </div>
        </div>
    );
};
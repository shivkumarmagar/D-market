import React from 'react';
import './About.css'; // Import your CSS file here

const About = () => {
    return (
        <div className="about-container">
            <h1>🌾 Digital Farming & Digital Selling</h1>

            {/* Digital Farming Section */}
            <section>
                <h2>📍 Digital Farming (Smart Farming / Precision Agriculture)</h2>
                <p>
                    <strong>Digital farming</strong> is the integration of modern digital technologies into agriculture to enhance productivity,
                    reduce costs, and promote sustainable practices. By leveraging data, connectivity, and automation, farmers can make informed
                    decisions and manage resources efficiently.
                </p>

                <h3>🔑 Key Aspects of Digital Farming:</h3>
                <ul>
                    <li><strong>Sensors & IoT Devices:</strong> Monitor soil moisture, temperature, crop health, and real-time weather conditions.</li>
                    <li><strong>GPS & GIS Technologies:</strong> Map fields accurately to optimize planting, irrigation, and fertilization.</li>
                    <li><strong>Drones & Satellite Imagery:</strong> Provide aerial insights for crop monitoring and early detection of issues like pests or nutrient deficiencies.</li>
                    <li><strong>Data Analytics & AI:</strong> Analyze farm data to predict yields, detect problems early, and recommend best farming practices.</li>
                    <li><strong>Automation & Robotics:</strong> Machines for sowing, irrigation, and harvesting reduce manual labor and increase efficiency.</li>
                    <li><strong>Mobile Applications:</strong> Give farmers access to forecasts, market rates, expert advice, and smart farming tools anytime, anywhere.</li>
                </ul>

                <h3>✅ Benefits of Digital Farming:</h3>
                <ul>
                    <li>Improved crop yields and quality</li>
                    <li>Efficient use of water, fertilizers, and pesticides</li>
                    <li>Cost savings and increased profitability</li>
                    <li>Reduced environmental impact through precision resource use</li>
                    <li>Data-driven decision making for better farm management</li>
                </ul>
            </section>

            {/* Digital Selling Section */}
            <section>
                <h2>🛒 Digital Selling</h2>
                <p>
                    <strong>Digital selling</strong> refers to using digital platforms and tools to market and sell agricultural products online.
                    It connects farmers directly with buyers, bypassing middlemen and expanding market access.
                </p>

                <h3>🔑 Key Features of Digital Selling in Agriculture:</h3>
                <ul>
                    <li><strong>Online Marketplaces:</strong> Platforms where farmers list and sell products directly to buyers, retailers, or wholesalers.</li>
                    <li><strong>Mobile Apps:</strong> Enable easy product listing, order tracking, and communication between farmers and buyers.</li>
                    <li><strong>Payment Gateways:</strong> Secure digital methods for seamless transactions.</li>
                    <li><strong>Logistics & Delivery Services:</strong> Efficient transportation of products from farm to buyer.</li>
                    <li><strong>Real-Time Price Discovery:</strong> Transparent pricing based on market demand and supply.</li>
                    <li><strong>Customer Reviews & Ratings:</strong> Build trust and help buyers make informed choices.</li>
                </ul>

                <h3>✅ Benefits of Digital Selling:</h3>
                <ul>
                    <li>Expanded market reach beyond local areas</li>
                    <li>Better prices by removing intermediaries</li>
                    <li>Convenience and time-saving in sales and marketing</li>
                    <li>Increased transparency and buyer trust</li>
                    <li>Access to buyer feedback for continuous quality improvement</li>
                </ul>
            </section>

            {/* Summary Section */}
            <section>
                <h2>📌 Summary</h2>
                <p>
                    <strong>Digital Farming</strong> uses technology to improve how farmers grow crops and manage farms, while <strong>Digital Selling</strong> leverages online platforms to help farmers market and sell their produce efficiently and profitably.
                </p>
            </section>
        </div>
    );
};

export default About;

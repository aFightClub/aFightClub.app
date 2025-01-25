import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "APIFunnels",
    description:
      "Use the ClickFunnels 2.0 API in your landing pages safely without exposing your API key. For marketing ninjas who want to do more.",
    image: "/apifunnels.png",
    link: "https://apifunnels.com",
  },
  {
    title: "SurveyPeek",
    description:
      "Track, import, filter and export your ClickFunnels 2.0 survey data with ease. Made for any one running a survey in ClickFunnels.",
    image: "/surveypeek.png",
    link: "https://surveypeek.com",
  },
  {
    title: "InboundWebhook",
    description:
      "Connect any service that sends out a webhook to start creating and updating contacts in ClickFunnels.",
    image: "/inboundwebhook.png",
    link: "http://inboundwebhook.com",
  },
  {
    title: "CFAlerts",
    description:
      "A mobile app to make your phone go cha-ching every time you make a sale or lead in ClickFunnels.",
    image: "/comingsoon.png",
    link: null,
  },
  {
    title: "SnailTrain",
    description:
      "A Ruby on Rails 8 scaffolding generator with AI super powers. For developers who love to code.",
    image: "/snailtrain.png",
    link: "http://snailtrain.com",
  },
  {
    title: "CustomLogin",
    description:
      "Add custom login pages for your ClickFunnels 2.0 communities and memberships with ease.",
    image: "/comingsoon.png",
    link: null,
  },
  {
    title: "SpreadsheetSync",
    description:
      "Add custom abilities to ClickFunnels 2.0 + Google Spreadsheets in magical ways.",
    image: "/comingsoon.png",
    link: null,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-16">
          <Image
            src="/logo.png?height=150&width=300"
            alt="Company Logo"
            width={300}
            height={150}
            className="mb-12"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-3 animate-gradient">
            Solve big problems
            <br /> with small tools
          </h1>
          <h4 className="text-sm text-gray-600 md:text-xl px-6 w-2/3 mx-auto font-light text-center mb-8 animate-gradient">
            <strong className="text-gray-500">Who are we?</strong> We are a
            collective of passionate developers, designers &amp; entrepreneurs
            building software products to enhance your marketing experience.
          </h4>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-lg text-white hover:bg-gray-700/50 transition-colors duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col items-center md:flex-row gap-8">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 md:mb-0 md:w-1/2 object-cover"
                  />
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold mb-4">
                      {product.title}
                    </h2>
                    <p className="text-lg mb-6">{product.description}</p>
                    {product.link && (
                      <Link
                        href={product.link}
                        target="_blank"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                      >
                        Learn more
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 mb-6 text-sm text-gray-500 text-center">
          <p>&copy; 2025 - a FightClub App</p>
        </footer>
      </div>
    </main>
  );
}

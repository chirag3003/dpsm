import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Home from "components/Home";
import axios from "axios";
import { load } from "cheerio";

const navigation = [
    { name: "About US", href: "https://dpsmegacity.in/aboutus.php", current: false },
    { name: "Our Team", href: "https://dpsmegacity.in/people_who.php", current: false },
    { name: "Calendar", href: "https://dpsmegacity.in/school_calendar.php", current: false },
    { name: "Academics", href: "https://dpsmegacity.in/syllabus.php", current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
    return (
        <>
            <div className="min-h-full text-white">
                <div className="bg-green-600 pb-32">
                    <Disclosure
                        as="nav"
                        className="bg-green-600 border-b border-green-300 border-opacity-25 lg:border-none"
                    >
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                                    <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-green-400 lg:border-opacity-25">
                                        <div className="px-2 flex items-center lg:px-0">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="block h-8 lg:h-12 w-auto"
                                                    src="/logo.png"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="hidden lg:block lg:ml-10">
                                                <div className="flex space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "bg-green-600 text-white"
                                                                    : "text-white hover:bg-green-500 hover:bg-opacity-75",
                                                                "rounded-md py-2 px-3 text-sm font-medium"
                                                            )}
                                                            aria-current={
                                                                item.current ? "page" : undefined
                                                            }
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                                            <div className="max-w-lg w-full lg:max-w-xs">
                                                <label htmlFor="search" className="sr-only">
                                                    Search
                                                </label>
                                                <div className="relative text-gray-400 focus-within:text-gray-600">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                        <SearchIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <input
                                                        id="search"
                                                        className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white focus:border-white sm:text-sm"
                                                        placeholder="Search"
                                                        type="search"
                                                        name="search"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex lg:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="bg-green-600 p-2 rounded-md inline-flex items-center justify-center text-green-200 hover:text-white hover:bg-green-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon
                                                        className="block h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <MenuIcon
                                                        className="block h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="lg:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-green-700 text-white"
                                                        : "text-white hover:bg-green-500 hover:bg-opacity-75",
                                                    "block rounded-md py-2 px-3 text-base font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-white">
                                Welcome to DPS Megacity
                            </h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <Home data={props} />
                </main>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const data = await axios.get("https://dpsmegacity.in/");
    const $ = load(data.data);

    const gallery = $(".galleryview .panel")
        .toArray()
        .map((item) => {
            return {
                src: `https://dpsmegacity.in/${$(item).find("img").attr("src")}`,
                text: $(item).find("h3").text(),
            };
        });

    return {
        props: {
            gallery,
        }, // will be passed to the page component as props
    };
}

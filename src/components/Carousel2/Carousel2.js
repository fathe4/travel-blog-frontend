import React from 'react';

const Carousel2 = () => {
    return (
        <div class="relative text-gray-100 overflow-hidden h-screen">
            <header class="flex items-center justify-center md:justify-between relative p-4 z-40">
                <nav class="ml-42 flex space-x-4 text-xl font-semibold">
                    <a href="#" class="px-4 py-2 transition-colors duration-150 hover:bg-gray-500 hover:bg-opacity-25">Home</a>
                    <a href="#" class="px-4 py-2 transition-colors duration-150 hover:bg-gray-500 hover:bg-opacity-25">About</a>
                    <a href="#" class="px-4 py-2 transition-colors duration-150 hover:bg-gray-500 hover:bg-opacity-25">Contact</a>
                    <a href="#" class="px-4 py-2 transition-colors duration-150 hover:bg-gray-500 hover:bg-opacity-25">Destinations</a>
                </nav>
                <div class="hidden md:block mr-8 lg:mr-48 space-x-4">
                    <button class="p-2 rounded-full">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-8 w-8">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button class="p-2 rounded-full">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </header>
            <div class="absolute flex items-center ml-16 z-20 top-0 left-0 h-full w-auto">
                <div class="flex flex-col items-center justify-between h-1/2 w-1 bg-white shadow-xl rounded-full">
                    <div class="w-4 h-4 bg-white rounded-full"></div>
                    <div class="w-4 h-4 bg-red-600 rounded-full"></div>
                    <div class="w-4 h-4 bg-white rounded-full"></div>
                </div>
            </div>
            <main class="relative z-10 py-40 ml-32 lg:ml-48 max-w-custom">
                <h1 class="font-main uppercase leading-tight">
                    <span class="text-red-600 red-shadow">J</span>apan
                </h1>
                <p class="-ml-2 p-4 font-serif font-semibold leading-loose bg-gray-900 bg-opacity-50 rounded-lg">Japan (日本) is an island country of East Asia  in the northwest Pacific Ocean. It borders the sea of Japan to the west and extends from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the south.</p>
            </main>
            <div class="absolute z-20 right-0 bottom-0 mr-24 mb-16">
                <div class="mb-4 text-right text-2xl font-semibold">Popular place of interests</div>
                <div class="relative">
                    <div class="absolute -ml-16 left-0 top-0 h-full w-auto flex items-center">
                        <button class="p-2 rounded-full">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 w-12">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex space-x-8">
                        <div class="h-40 w-48 ml-6 mr-6 bg-gray-800 transform scale-125 overflow-hidden rounded-lg">
                            <img src="https://source.unsplash.com/BjJP2TN8WoI/640x359" class="h-full w-auto object-cover" />
                        </div>
                        <div class="h-40 w-40 bg-gray-800 overflow-hidden rounded-lg">
                            <img src="https://source.unsplash.com/wPMvPMD9KBI/640x960" class="h-full w-full object-cover" />
                        </div>
                        <div class="h-40 w-40 bg-gray-800 overflow-hidden rounded-lg">
                            <img src="https://source.unsplash.com/7H77FWkK_x4/640x693" class="h-full w-full object-cover" />
                        </div>
                    </div>
                    <div class="absolute -mr-16 right-0 top-0 h-full w-auto flex items-center">
                        <button class="p-2 rounded-full">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 w-12">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="absolute flex space-x-4 z-20 left-0 bottom-0 ml-16 mb-12">
                <a href="#" class="p-2">
                    <svg viewBox="0 0 612 612" fill="currentColor" class="h-10 w-10">
                        <path d="M612 116.258a250.746 250.746 0 01-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48A125.556 125.556 0 0124.63 232.21v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253c24.661-17.595 46.001-39.7 62.791-64.863z" />
                    </svg>
                </a>
                <a href="#" class="p-2">
                    <svg viewBox="0 0 90 90" fill="currentColor" class="h-10 w-10">
                        <path d="M90 15.001C90 7.119 82.884 0 75 0H15C7.116 0 0 7.119 0 15.001v59.998C0 82.881 7.116 90 15.001 90H45V56H34V41h11v-5.844C45 25.077 52.568 16 61.875 16H74v15H61.875C60.548 31 59 32.611 59 35.024V41h15v15H59v34h16c7.884 0 15-7.119 15-15.001V15.001z" />
                    </svg>
                </a>
                <a href="#" class="p-2">
                    <svg viewBox="0 0 169.063 169.063" fill="currentColor" class="h-10 w-10">
                        <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" />
                        <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zm45.39-84.842c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" />
                    </svg>
                </a>
            </div>
            <img src="https://source.unsplash.com/aqZ3UAjs_M4/1920x1280" class="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" />
        </div>
    );
};

export default Carousel2;
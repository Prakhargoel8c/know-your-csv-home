import type { Component } from 'solid-js';
import Logo from './static/icons/logo.svg';
import Search from './static/icons/search.svg';
const App: Component = () => {
  return (
    <div class="bg-background h-screen w-screen py-14 px-8 text-white overflow-auto space-y-16">
      <div class="flex flex-col hero gap-16">
        <div class="flex justify-between px-12">
          <span class="text-xl font-bold font-heading space-x-2 flex items-center">
            <Logo />
            CSVSummary
          </span>
          <button class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white text-base">Join the waitlist</button>
        </div>
        <div class="flex justify-between items-center">
          <div class="max-w-md hero-title-section flex flex-col gap-6">
            <div class="hero-title font-heading text-7xl">Unleash the power of your data.</div>
            <div class="text-sm">
              Welcome to CSVSummary, the smart tool that turns your <br /> data into insights.
            </div>
            <div class="flex gap-2 mt-6 text-base">
              <button class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white">Join the waitlist</button>
              <button class="text-white rounded-full px-4 py-1.5 hover:bg-purple-500">Get in touch</button>
            </div>
          </div>
          <div class="relative">
            <span class="absolute left-[47%] top-1/4">
              <Search />
            </span>
            <img src="/images/heroBackground.png" alt="hero" width={654} height={465} />
          </div>
        </div>
      </div>
      <div class="flex gap-16 justify-between items-center px-12">
        <div class="text-white flex flex-col gap-32 max-w-lg">
          <div class="space-y-5">
            <div class="font-heading text-3xl font-semibold section-title">Need a summary of your data?</div>
            <span class="bg-white bg-opacity-[0.15] rounded-full text-xs py-1 px-3">No problem</span>
          </div>
          <div class="space-y-5">
            <div class="font-heading text-3xl font-semibold section-title">Want to visualize your data with a graph?</div>
            <span class="bg-white bg-opacity-[0.15] rounded-full text-xs py-1 px-3">We've got you covered</span>
          </div>
          <div class="space-y-5">
            <div class="font-heading text-3xl font-semibold section-title">Need to filter your data and create a table?</div>
            <span class="bg-white bg-opacity-[0.15] rounded-full text-xs py-1 px-3">Easy peasy</span>
          </div>
        </div>
        <img src="/images/cube.svg" width={548} height={587} />
      </div>
      <div class=""></div>
    </div>
  );
};

export default App;

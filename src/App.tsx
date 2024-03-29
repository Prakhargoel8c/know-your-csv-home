import { Component, createSignal } from 'solid-js';
import { Toaster } from 'solid-toast';
import { ContactUs } from './ContactUs';
import Logo from './static/icons/logo.svg';
import Search from './static/icons/search.svg';
import { Waitlist } from './Waitlist';

const App: Component = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = createSignal(false);
  const [contactUsOpen, setContactUsOpen] = createSignal(false);
  const toggleWaitlist = () => setIsWaitlistOpen(!isWaitlistOpen());
  const toggleContactUs = () => setContactUsOpen(!contactUsOpen());
  return (
    <>
      <div class="bg-background h-screen w-screen text-white overflow-auto space-y-16 overflow-x-hidden md:overflow-x-auto">
        <div class="space-y-16 md:px-8 px-4">
          <div class="flex flex-col hero gap-16">
            <div class="flex justify-between md:px-12 pt-14">
              <span class="text-xl font-bold font-heading space-x-2 flex items-center">
                <Logo />
                <span class="hidden md:block">Know your CSV</span>
              </span>
              <button
                type="button"
                class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white text-base"
                onClick={toggleWaitlist}
              >
                Join the waitlist
              </button>
            </div>
            <div class="flex justify-between items-center flex-col-reverse md:flex-row">
              <div class="max-w-md hero-title-section flex flex-col gap-6">
                <div class="hero-title font-heading text-4xl md:text-7xl">Unleash the power of your data.</div>
                <div class="md:text-sm text-xs">
                  Welcome to Know your CSV, the smart tool that turns your <br /> data into insights.
                </div>
                <div class="flex gap-2 mt-6 text-base">
                  <button
                    type="button"
                    class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white"
                    onClick={toggleWaitlist}
                  >
                    Join the waitlist
                  </button>
                  <button type="button" class="text-white rounded-full px-4 py-1.5 hover:bg-purple-500" onClick={toggleContactUs}>
                    Get in touch
                  </button>
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
          <div class="flex gap-16 justify-between items-center px-12 flex-col md:flex-row">
            <div class="text-white flex flex-col gap-32 max-w-lg">
              <div class="space-y-5">
                <div class="font-heading text-xl md:text-3xl font-semibold section-title">Need a summary of your data?</div>
                <span class="bg-white bg-opacity-[0.15] rounded-full text-xs py-1 px-3">No problem</span>
              </div>
              <div class="space-y-5">
                <div class="font-heading text-xl md:text-3xl font-semibold section-title">Want to visualize your data with a graph?</div>
                <span class="bg-white bg-opacity-[0.15] rounded-full text-xs py-1 px-3">We've got you covered</span>
              </div>
              <div class="space-y-5">
                <div class="font-heading text-xl md:text-3xl font-semibold section-title">Need to filter your data and create a table?</div>
                <span class="bg-white bg-opacity-[0.15] rounded-full text-xs py-1 px-3">Easy peasy</span>
              </div>
            </div>
            <img src="/images/cube.svg" width={548} height={587} class="animate-spin-slow" />
          </div>
          <div>
            <div class="h-5 bg-background sticky top-0 z-50" />
            <div class="hero-three relative h-[180px]" />
            <div class="flex flex-col relative items-center pt-32">
              <div class="font-heading font-semibold section-title text-xl md:text-3xl max-w-[40rem] text-center">
                Our user-friendly interface makes it easy to get started, even if you're not a data scientist. And with our customizable options, you
                can tailor your results to your exact needs.
              </div>
            </div>
            <div class="space-y-8">
              <div class="grid place-items-center relative">
                <img src="/images/stars.svg" alt="hero" width={943} height={678} class="absolute left-[20%]" />
                <img src="/images/funnelLight.png" alt="hero" width={654} height={465} />
                <div class="font-heading font-semibold section-title text-xl md:text-3xl max-w-[40rem] text-center">
                  Don't waste any more time staring at spreadsheets. Try Know your CSV today and see your data in a whole new light.
                </div>
              </div>
              <div class="flex gap-2 pt-12 text-base justify-center">
                <button
                  type="button"
                  class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white"
                  onClick={toggleWaitlist}
                >
                  Join the waitlist
                </button>
                <button type="button" class="text-white rounded-full px-4 py-1.5 hover:bg-purple-500" onClick={toggleContactUs}>
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div class="grid place-items-center">
            <div class="rounded-full flex py-3 px-6 bg-white text-white bg-opacity-[0.15] text-xl gap-3 items-center font-heading">
              <Logo />
              Know your CSV
            </div>
          </div>
        </div>
        <div class="border-t border-black-100 text-xs py-4 px-4 md:px-14 text-black-200 flex items-center justify-between">
          <div>© 2023 Know your CSV. All rights reserved.</div>
          {/* <div class="hidden md:block">Designed by Kartik Dhaduk</div> */}
        </div>
      </div>
      <Waitlist isOpen={isWaitlistOpen} onClose={toggleWaitlist} />
      <ContactUs isOpen={contactUsOpen} onClose={toggleContactUs} />
      <Toaster />
    </>
  );
};

export default App;

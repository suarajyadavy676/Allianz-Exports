import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import { FiUserPlus } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";

function MainBody() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const triggerHeight = 150; // Adjust this value based on when you want the text to appear

    if (scrollTop > triggerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="my-10 w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="my-auto">
            <h1 className="text-4xl font-bold my-3">
              One stop solution to test your Strategy ideas
            </h1>
            <p>
              As we are launching a Beta soon, we are giving away 1 month FREE
              subscription to our early backers. Sign up below to get FREE
              subscription.
            </p>
            <button className="py-2 px-4 text-white bg-blue-500 rounded-md mt-10">
              Sign Up
            </button>
            <p className="my-4">
              <span>
                <TiTick className="text-green-400 text-xl inline mx-1" />
                Free 30-day subscription
              </span>
              <span className="mx-10">
                <TiTick className="text-green-400 text-xl inline mx-1" />
                No credit card needed
              </span>
            </p>
          </div>
          <div className="text-center">
            {/* {isVisible && ()} */}
            <img src="./img1.png" alt="img1" />
          </div>
        </div>

        <div className="text-center">
          <span className=" px-2 text-blue-600 text-sm rounded-xl bg-blue-100">
            FEATURES
          </span>
          <p className="text-3xl font-bold my-4">
            Excellent Features. Excellent Results
          </p>
          <p className="">
            Start working with <span className="text-blue-600">Unfluke</span> to
            manage all your strategies
          </p>

          {isVisible && (
            <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
              <img src="./img2.jpg" alt="img2" />
              <div>
                <p className="text-2xl font-bold my-8">
                  HISTORICAL INTRADAY CHARTS
                </p>
                <Accordion allowToggle bg={"white"} border={"white"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1">
                          <p className="text-xl">
                            <FiUserPlus className="inline mr-4 bg-green-100 text-green-500 text-2xl" />
                            <span className="text-bold">
                              Different Segments Charts
                            </span>
                          </p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        Get historical intraday charts of Equity, Futures and
                        Options.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <hr className="my-6" />
                <Accordion allowToggle bg={"white"} border={"white"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1">
                          <p>
                            <BsGraphUp className="inline bg-red-100 text-red-600 text-2xl mr-4" />
                            Data since 2017
                          </p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        Currently we have data since 2017 and its updated real
                        time.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}

          {isVisible && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 my-32 text-left">
              <div>
                <p className="text-2xl font-bold my-8">HISTORICAL SCANNER</p>

                <Accordion allowToggle bg={"white"} border={"white"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p className="text-xl">
                            <FiUserPlus className="inline mr-4 bg-green-100 text-green-500 text-2xl" />
                            <span className="text-bold">
                              Different Segments Scanner
                            </span>
                          </p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        Check scanner results using a combination of different
                        indicators and time frames.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <hr className="my-6" />
                <Accordion allowToggle bg={"white"} border={"white"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p>
                            <BsGraphUp className="inline bg-red-100 text-red-600 text-2xl mr-4" />
                            Data since 2017 for FNO
                          </p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p>
                        Get scanner results of even Futures and Options
                        (intraday) since 2017
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <img src="./img3.jpg" alt="img3" />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
            <img src="./img4.jpg" alt="img4" />
            <p className="text-2xl font-bold my-auto">BACKTEST STRATEGIES</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 mb-40">
            <p className="text-2xl font-bold my-auto">
              ADVANCE BACKTEST STRATEGIES
            </p>
            <img src="./img5.png" alt="img5" />
          </div>
        </div>
      </div>
      <div className="text-center bg-blue-50 py-20 my-20">
        <p className="text-2xl font-bold">In partnership with</p>
        <img src="./img6.jpg" alt="img6" width={60} className="mx-auto my-6" />
        <p className="w-[90%] mx-auto">
          TradingView is a widely recognized and highly regarded platform among
          traders and investors, with a vast user base spanning the globe. It
          offers state-of-the-art charting tools that allow market enthusiasts
          to engage, analyze data, and prepare for{" "}
          <a
            href="https://www.tradingview.com/symbols/BTCUSD/"
            className="text-blue-500"
          >
            btc usd, eth usd
          </a>{" "}
          trading and various other assets.
        </p>
      </div>
    </>
  );
}

export default MainBody;

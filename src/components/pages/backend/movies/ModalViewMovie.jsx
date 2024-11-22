import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { imgPath } from "@/components/helpers/functions-general";
import { Play, Plus, ThumbsUp, X } from "lucide-react";

const ModalViewMovie = () => {
  return (
    <ModalWrapper>
      <div
        className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
      -translate-y-1/2 max-w-[800px] w-full rounded-md border border-line"
      >
        <div className="modal-banner relative">
          <img
            src={`${imgPath}/banner-wallpaper.jpg`}
            alt=""
            className="h-[350px] w-full object-cover"
          />

          <div className="absolute bottom-10 left-6 z-50">
            <h3 className="mb-3">LoKi S1: Ep5</h3>
            <ul className="flex gap-2 items-center">
              <li>
                <button className="flex gap-2 bg-dark px-4 py-1.5 rounded-md text-light">
                  <Play fill="text-light" /> Play
                </button>
              </li>
              <li>
                <button className="size-[40px] center-all rounded-full border-[1px] border-dark bg-light bg-opacity-40">
                  <Plus size={18} strokeWidth={2} />
                </button>
              </li>
              <li>
                <button className="size-[40px] center-all rounded-full border-[1px] border-dark bg-light bg-opacity-40">
                  <ThumbsUp size={18} strokeWidth={2} />
                </button>
              </li>
            </ul>
          </div>
          <div className="tint absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black bg-transparent"></div>
        </div>
        <button className="absolute top-3 right-3 size-[35px] center-all text-dark bg-light rounded-full">
          <X />
        </button>

        <div className="modal-body p-4">
          <div className="grid grid-cols-[1fr,_250px] gap-5">
            <div>
              <ul className="flex gap-3 items-center text-xs mb-3">
                <li>2022</li>
                <li>1hr 44mins</li>
                <li className="border-[1px] border-dark p-[0.5px] px-1.5 text-[9px]">
                  HD
                </li>
              </ul>
              <p className="text-xs leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur officiis nemo porro error enim sunt ducimus,
                laudantium odio? Unde, ut!
              </p>
            </div>
            <div className="space-y-5 text-xs">
              <p className="text-xs leading-relaxed">
                <span className="opacity-60 text-[12px]"> Cast: </span>Loki,
                Thor, Odin, Eve
              </p>
              <p className="text-xs leading-relaxed">
                <span className="opacity-60 text-[12px]"> Genre: </span>Action
                Fantasy Sci-Fi Mystery
              </p>
            </div>
          </div>
        </div>

        <div className="modal-more p-4">
          <div className="grid grid-cols-3 gap-5">
            {Array.from(Array(3).keys()).map((i) => (
              <div className="card rounded-md overflow-hidden">
                <div className=" relative">
                  <img
                    src={`${imgPath}/movie-1.jpg`}
                    alt=""
                    className="w-full object-cover h-[120px]"
                  />
                  <p className="absolute top-3 right-3 z-40">1h 5mins</p>
                  <div className="tint bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent absolute top-0 left-0 w-full h-full"></div>
                </div>
                <div className="p-4 bg-secondary">
                  <div className="flex justify-between items-center mb-5">
                    <ul className="flex gap-3 items-center text-xs">
                      <li>2022</li>
                      <li className="border-[1px] border-dark py-[0.5px] px-1.5 text-[9px]">
                        HD
                      </li>
                    </ul>
                    <button className="size-[50px] rounded-full border-[1px] border-dark center-all">
                      <Plus />
                    </button>
                  </div>
                  <p className="text-xs text-balance leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eum quibusdam nodi corporis quidem sit porro hic?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalViewMovie;

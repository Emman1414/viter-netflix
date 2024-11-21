import { Moon, Settings } from "lucide-react";
import React from "react";

const Header2 = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <div className="[&>*]:mb-0 ">
          <h4>Movies</h4>
          <p>List of American Movies</p>
        </div>

        <div className="flex items-center gap-6">
          <span>
            <button className="h-[20px] w-[45px] bg-primary rounded-2xl border border-line px-[2px]">
              <span className="size-[16px] rounded-full bg-secondary block grid place-content-center">
                <Moon size={14} stroke={"white"} />
              </span>
            </button>
          </span>
          <button>
            <Settings />
          </button>
          <button className="size-[30px] rounded-full bg-accent grid place-content-center text-white">
            ED
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2;

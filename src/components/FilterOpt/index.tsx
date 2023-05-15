import React from 'react'
interface IProps {
  checked: boolean;
  value: string;
  handleOnClick: (filter:string) => void;
}
export const FilterOpt = ({ checked, value, handleOnClick }: IProps) => {
  return (
    <div>
      <button
        className={`rounded-lg ${
          checked
            ? 'bg-orange-200 hover:bg-orange-300'
            : 'bg-slate-200 hover:bg-slate-300 '
        } px-3 py-1`}
        onClick={() => {
          handleOnClick(value);
        }}
      >
        {value}
      </button>
    </div>
  );
};

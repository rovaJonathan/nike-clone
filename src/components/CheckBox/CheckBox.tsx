import React, { FC } from "react";

const CheckBox: FC<{
  label: string;
  checked: boolean;
  onChange: () => void;
  id: string;
}> = ({ label, checked, id, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-100 focus:ring-white"
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-2 text-sm">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;

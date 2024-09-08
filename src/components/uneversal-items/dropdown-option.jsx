import { useRouter, usePathname, useSearchParams } from "next/navigation";

/**
 * Dropdown option component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.option_name - The name of the option.
 * @param {string} props.option_lable - The label of the option.
 * @param {Array} props.options - The array of options.
 * @returns {JSX.Element} The dropdown option component.
 */
export default function DropDownOption({ option_name, option_lable, options }) {

  const pathname = usePathname()
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleOptionChange(value) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(option_name, value);
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete(option_name);
    }
  }
  return (
    <div className="flex justify-center items-center">
      <label htmlFor="order" className="mx-2">{option_lable}</label>
      <select className="card-list-select uni-background uni-text-color" id="order" name="order" onChange={(e) => handleOptionChange(e.target.value)}
        defaultValue={searchParams?.get(option_name)?.toString()}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>);
}
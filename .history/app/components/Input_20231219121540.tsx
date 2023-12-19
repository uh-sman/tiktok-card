
type InputType = "text" | "password" | "file" | "email" | 'date' | 'checkbox' | "radio"

interface InputProps {
    id: string;
    className: string;
    placeholder: string;
    type: InputType;
    onChange: (value: string, file?: File ) => void;
}

const Input: React.FC<InputProps> = ({
    id,
    className,
    placeholder,
    type,
    onChange
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, files } = event.target;
        if (type === 'file' && files) {
            onChange(value, files[0]);
        } else {
            onChange(value);
        }
    };

    return (
        <input
            id={id}
            className={className}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
        />
    );
};


export default Input;
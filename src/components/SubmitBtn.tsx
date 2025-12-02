import { useNavigation } from "react-router-dom";
type SubmitBtnProps = {
  className?: string;
  formBtn?: boolean;
};
const SubmitBtn = ({ className = "", formBtn }: SubmitBtnProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button type="submit" className={`btn btn-block ${className} ${formBtn && "form-btn"} `} disabled={isSubmitting}>
      {isSubmitting ? "submitting" : "submit"}
    </button>
  );
};
export default SubmitBtn;

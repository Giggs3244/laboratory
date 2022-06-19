interface ErrorInput {
  isValid: boolean;
  inputName: string;
  errorText: string;
}

interface ErrorMessage {
  errorsInput: ErrorInput[];
}

const ErrorMessage = ({ errorsInput }: ErrorMessage) => {
  return (
    <article id="error-message">
      {errorsInput.map(({ isValid, inputName, errorText }) =>
        isValid ? null : (
          <p key={`error-input-${inputName}`} id={`error-input-${inputName}`}>
            {errorText}
          </p>
        )
      )}
    </article>
  );
};

export default ErrorMessage;

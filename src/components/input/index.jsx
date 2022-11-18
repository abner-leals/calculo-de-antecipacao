import { Container, InputContainer } from "./styles";

function Input({ label, register, name, error, icon: Icon, ...rest }) {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error} </span>}
      </div>

      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;

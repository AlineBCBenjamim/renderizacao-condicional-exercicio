import { Form, FormContainer,Input, StyledLabel, SendButton} from "./styled";

function TelaCadastroEndereco(props){
    return(
        <FormContainer>
            <h1>Cadastre o seu endereço</h1>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input type="text" id="endereco"/>
                </StyledLabel>
                <StyledLabel htmlFor="numero da residencia">
                    Número da Residência:
                    <Input type="number" id="numero da residencia"/>
                </StyledLabel>
                <StyledLabel htmlFor="numero de telefone">
                    Telefone:
                    <Input type="tel" id="numero de telefone"/>
                </StyledLabel>
                <StyledLabel htmlFor="complemento">
                    complemento:
                    <Input type="text" id="complemento"/>
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar Endereço</SendButton>
                </Form>    
        </FormContainer>
    )
};

export default TelaCadastroEndereco;
import { Container, ContainerDescription, Description, Title } from './styles';

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConfirmationModal = ({
  open,
  onClose,
}: ConfirmationModalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Container onClose={handleClose} open={open}>
      <ContainerDescription>
        <Title>Muito obrigado</Title>
        <Description>
          Por responder nosso{'\n'}
          convite 💜
        </Description>
      </ContainerDescription>
    </Container>
  );
};

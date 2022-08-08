import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm">
        <h3>Your info</h3>
        <div>
            <input type="text"
           className="infoInput"
            name="FirstName"
            placeholder="First Name"
             />    
            <input type="text"
             className="infoInput"
              name="LastName"
              placeholder="Last Name"
             />
        </div>
      </form>
    </Modal>
  );
}
export default ProfileModal;

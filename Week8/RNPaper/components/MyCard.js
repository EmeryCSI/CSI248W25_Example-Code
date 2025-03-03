import { Avatar, Card, Button, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";

//Component to the left of the title
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

//Card component has multiple sections
//Card.Title: Header section with left Icon
//Card.Content Main area
//Card.Cover Image Section
//Card.Actions: Buttons at the bottom
export default function MyCard() {
  const theme = useTheme();

  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        // Can add a component to the left of the title
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">Content Header</Text>
        <Text variant="bodyMedium">Content Description</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button mode="contained-tonal">Submit</Button>
        {/* Buttons can have icons */}
        <Button
          icon="camera"
          mode="contained"
          //can use colors from theme secondary
          buttonColor={theme.colors.secondary}
          onPress={() => console.log("Camera Presses")}
        >
          Press Me
        </Button>
      </Card.Actions>
    </Card>
  );
}

import LoginForm from "@/components/LoginForm";
import { useTheme } from "@/hooks/useThemeStore";
import { Theme } from "@/styles/themes";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: theme.palette.bgDark,
    },
  });

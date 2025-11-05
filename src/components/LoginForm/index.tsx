import { useTheme } from "@/hooks/useThemeStore";
import { Theme } from "@/styles/themes";
import { rem } from "@/utils/scaling";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const EMAIL_CHARACTER_LIMIT = 254;
const PASSWORD_CHARACTER_LIMIT = 16;

export default function LoginForm() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={[theme.palette.bg, theme.palette.bgLight]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.inputs}>
        <View style={styles.input}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            textContentType="emailAddress"
            maxLength={EMAIL_CHARACTER_LIMIT}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoComplete="current-password"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            maxLength={PASSWORD_CHARACTER_LIMIT}
          />
        </View>
      </View>

      <Button
        title="Sign In"
        onPress={() => signIn(email, password)}
        color={theme.palette.secondary}
      />

      <View style={styles.seperator}>
        <View style={styles.seperatorLine} />
        <Text style={styles.seperatorText}>or</Text>
        <View style={styles.seperatorLine} />
      </View>

      <View style={styles.providers}>
        <Button
          title="Apple"
          onPress={() => {}}
          color={theme.palette.secondary}
        />
        <Button
          title="Github"
          onPress={() => {}}
          color={theme.palette.secondary}
        />
        <Button
          title="Google"
          onPress={() => {}}
          color={theme.palette.secondary}
        />
      </View>
    </LinearGradient>
  );
}

function signIn(email: string, password: string) {}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      maxWidth: "90%",
      width: 450,
      overflowY: "scroll",

      lineHeight: 1,

      gap: rem(2.5),

      padding: rem(1.5),

      borderRadius: rem(1),
      borderColor: theme.palette.border,
      borderTopColor: theme.palette.highlight,
      borderWidth: 1,

      boxShadow: [
        {
          offsetX: 0,
          offsetY: 0,
          blurRadius: 2,
          color: "hsla(0 0% 0% 0.07)",
        },
        {
          offsetX: 0,
          offsetY: 4,
          blurRadius: 4,
          color: "hsla(0 0% 0% 0.15)",
        },
      ],
    },
    header: {},
    headerText: {
      textAlign: "center",
      color: theme.palette.text,
      fontFamily: theme.font.regular.fontFamily,
      fontWeight: theme.font.semibold.fontWeight,
      fontSize: rem(2),
    },
    inputs: {
      gap: rem(1),
    },
    input: {
      gap: rem(0.5),
    },
    inputText: {
      color: theme.palette.text,
      fontFamily: theme.font.regular.fontFamily,
      fontWeight: theme.font.regular.fontWeight,
      fontSize: rem(1),
    },
    inputBox: {
      color: theme.palette.text,
      fontFamily: theme.font.regular.fontFamily,
      fontWeight: theme.font.regular.fontWeight,
      fontSize: rem(0.75),

      paddingLeft: rem(0.25),
      paddingRight: rem(0.25),

      paddingBottom: rem(0.5),
      paddingTop: rem(0.5),

      borderBottomColor: theme.palette.border,
      borderBottomWidth: 1,
    },
    seperator: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      gap: 20,
    },
    seperatorLine: {
      flexGrow: 1,
      borderBottomColor: theme.palette.border,
      borderBottomWidth: 1,
    },
    seperatorText: {
      color: theme.palette.textMuted,
      fontFamily: theme.font.regular.fontFamily,
      fontWeight: theme.font.regular.fontWeight,
      fontSize: rem(1),
    },
    providers: {
      gap: rem(1),
    },
  });

import { useTheme } from "@/hooks/useThemeStore";
import { Theme } from "@/styles/themes";
import { rem } from "@/utils/scaling";
import {
  exchangeCodeAsync,
  makeRedirectUri,
  useAuthRequest,
} from "expo-auth-session";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const EMAIL_CHARACTER_LIMIT = 254;
const PASSWORD_CHARACTER_LIMIT = 16;

const githubDiscovery = {
  authorizationEndpoint: "http://localhost:8080/oauth2/authorize",
  tokenEndpoint: "http://localhost:8080/oauth2/token",
  revocationEndpoint: "http://localhost:8080/oauth2/revoke",
};

const googleDiscovery = {
  authorizationEndpoint: "http://localhost:8080/oauth2/authorization/google",
  tokenEndpoint: "http://localhost:8080/oauth2/token",
  revocationEndpoint: "http://localhost:8080/oauth2/revoke",
};

export default function LoginForm() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "pluton-client",
      scopes: ["openid", "profile"],
      redirectUri: makeRedirectUri({
        scheme: "pluton",
      }),
    },
    githubDiscovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const code = response.params.code;
      const codeVerifier = request?.codeVerifier ?? "";

      exchangeCodeAsync(
        {
          clientId: "pluton-client",
          code: code,
          redirectUri: makeRedirectUri({
            scheme: "pluton",
          }),
          extraParams: {
            code_verifier: codeVerifier,
          },
        },
        githubDiscovery
      )
        .then((response) => console.log(response))
        // TODO: Add better error responses
        .catch((error) => console.error("Token exchange failed: ", error));
    }
  }, [response, request?.codeVerifier]);

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
        onPress={() => login(email, password)}
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
          disabled={!request}
          title="Github"
          onPress={() => {
            promptAsync().catch((exception) => console.log(exception));
          }}
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

function login(email: string, password: string) {}

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

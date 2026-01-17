import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  largeText: {
    fontSize: 34,
    fontWeight: "800",
    color: "#000",
  },
  smallText: {
    fontSize: 14,
    color: "#6b6b6b",
    marginTop: 8,
  },
  formGroup: {
    marginTop: 24,
  },
  placeholderText: {
    fontSize: 12,
    color: "#7e7b7b",
    marginBottom: 6,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  forgotPasswordText: {
    marginTop: 12,
    color: "#6b6b6b",
    textAlign: "right",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e6e6e6",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#7e7b7b",
  },
  socialMediaButtonGroup: {
    gap: 12,
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  socialMediaButtonText: {
    color: "#000",
    marginLeft: 6,
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
  },
  subText: {
    color: "#7e7b7b",
  },
  subTextJoin: {
    color: "#000",
    fontWeight: "700",
  },
});

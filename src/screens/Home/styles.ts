import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  input:{
    height: 56,
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    color: "white",
    fontSize: 16,
    
  },
  button:{
    width:56,
    height: 56,
    marginTop: 20,
    marginLeft:12,
    backgroundColor: "#31cf6c",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText:{
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  form:{
    width: "100%",
    flexDirection: "row",
  }
});

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-5xl font-jua">
        Lihini
        <StatusBar style="auto" />
        <Link href="/home" style={{ color: "blue" }}>
          Go to home
        </Link>
      </Text>
    </View>
  );
}

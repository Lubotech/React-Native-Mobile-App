import { Stack } from "expo-router";
export default function OrdersLayOut() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

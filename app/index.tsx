import ReceiverBubble from "@/components/ReceiverBubble";
import SenderBubble from "@/components/SenderBubble";
import { Menu, SendHorizontal } from "lucide-react-native";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0c0c0e]">

      {/** Header */}
      <View className="flex-row items-center justify-between px-5 py-4">
      
        <Pressable className="w-11 h-11 rounded-full bg-white/10 border border-1 border-white/10 items-center justify-center">
          <Menu color="white" size={22} />
        </Pressable>

        <Text className="text-white text-2xl font-bold tracking-wide">
          Ciri
        </Text>

        <View className="w-11" />
      </View>

      {/**Chat Area */}
      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 110}}
      >
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
        <ReceiverBubble />
        <SenderBubble />
      </ScrollView>
      
      <View className="absolute bottom-5 left-0 right-0 px-4 flex-row items-center">

  <View
    className="
      flex-1
      rounded-full
      px-5
      py-1
      bg-[#17171A]
      border
      border-white/[0.05]
    "
  >
    <TextInput
      placeholder="Message..."
      placeholderTextColor="#777"
      className="
        text-white
        text-[15px]
        font-poppins
      "
    />
  </View>

  <Pressable
    className="
      ml-3
      w-14
      h-14
      rounded-full
      bg-gray-400
      items-center
      justify-center
    "
  >
    <SendHorizontal size={28} color="#000" />
  </Pressable>

</View>

    </SafeAreaView>
  );
}
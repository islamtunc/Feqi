// Bismillahirahmanirahim



import ForYouFeed from "@/app/(main)/ForYouFeed";

import PostEditor from "@/components/posts/editor/PostEditor";
import SearchField from "@/components/SearchField";
import TrendsSidebar from "@/components/TrendsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeAlert } from "lucide-react";

export default function MmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">


        <Tabs defaultValue="PostEditor">
          <TabsList>
        
            <TabsTrigger value="for-you">Yayındaki ilanlarım</TabsTrigger>
        
            <TabsTrigger value="following"></TabsTrigger>
        
            <TabsTrigger value="PostEditor">Ayarlar</TabsTrigger>

          </TabsList>
          <TabsContent value="PostEditor">


<PostEditor/>
          </TabsContent>
          <TabsContent value="following">



          </TabsContent>
          <TabsContent value="for-you">


</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

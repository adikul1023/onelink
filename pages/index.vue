<template>
  <div class="h-screen grid grid-cols-3 divide-x dark:divide-slate-700">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100 dark:bg-slate-900">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-template-selector v-model="data.t" />
        <app-form-hr />
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.tw"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white dark:bg-slate-800 dark:border-slate-700 flex items-center">
        <theme-toggle />
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <button
          @click="openPreview"
          class="h-12 flex items-center space-x-2 px-4 border-r dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        >
          <span> Preview </span>
          <icon name="ph:eye-bold" class="h-4 w-4" />
        </button>
        <a
          href="https://github.com/adikul1023/onelink"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        >
          <span> Github </span>
          <icon name="mdi:github" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a
      href="https://twitter.com/fayazara"
      target="_blank"
      class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"
    >
      Made by Adi inspired from onelink
    </a>
  </div>
  
  <QRModal
    :url="publishedUrl"
    :is-open="showQRModal"
    @close="showQRModal = false"
  />
  
  <PreviewModal
    :data="data"
    :is-open="showPreviewModal"
    @close="showPreviewModal = false"
    @publish="handlePublishFromPreview"
  />
</template>

<script setup>
import { encodeData } from "../utils/transformer";

useHead({
  title: 'Create Your Page',
  meta: [
    { name: 'description', content: 'Design and create your personal link page with all your social profiles and important links.' }
  ]
})

const { success, error } = useToast()

const showQRModal = ref(false)
const showPreviewModal = ref(false)
const publishedUrl = ref('')

const data = ref({
  t: "simple", // template
  n: "",
  d: "",
  i: "",
  f: "",
  tw: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    t: "simple",
    n: "John Snow",
    d: "I’m John Snow, the king in the north. I know Nothing.",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    f: "https://www.facebook.com/john_snow",
    tw: "https://twitter.com/john_snow",
    ig: "https://www.instagram.com/john_snow",
    e: "mail@john_snow.cc",
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/john_snow",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const openPreview = () => {
  if (!data.value.n || data.value.n.trim() === '') {
    error("Missing Information", "Please add your name to see preview");
    return;
  }
  showPreviewModal.value = true;
};

const handlePublishFromPreview = () => {
  showPreviewModal.value = false;
  publish();
};

const publish = () => {
  // Basic validation
  if (!data.value.n || data.value.n.trim() === '') {
    error("Missing Information", "Please add your name before publishing");
    return;
  }
  
  const encodedData = encodeData(data.value);
  const url = `${window.location.origin}/1?data=${encodedData}`;
  
  publishedUrl.value = url
  showQRModal.value = true
  
  navigator.clipboard.writeText(url).then(() => {
    success("Link Copied!", "Share your link anywhere");
  }).catch(() => {
    // Modal still shows even if clipboard fails
  });
};
</script>

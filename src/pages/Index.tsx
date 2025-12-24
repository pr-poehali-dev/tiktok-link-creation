import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const youtubeVideos = [
    "dQw4w9WgXcQ",
    "9bZkp7q19f0",
    "kJQP7kiw5Fk"
  ];

  const socialLinks = [
    { 
      name: "YouTube", 
      url: "https://youtube.com/@yourchannel", 
      icon: "Youtube",
      color: "hover:bg-red-600"
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@yourchannel", 
      icon: "Music",
      color: "hover:bg-black"
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/yourchannel", 
      icon: "Instagram",
      color: "hover:bg-pink-600"
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/yourchannel", 
      icon: "Twitter",
      color: "hover:bg-blue-500"
    },
    { 
      name: "Discord", 
      url: "https://discord.gg/yourchannel", 
      icon: "MessageCircle",
      color: "hover:bg-indigo-600"
    },
    { 
      name: "Telegram", 
      url: "https://t.me/yourchannel", 
      icon: "Send",
      color: "hover:bg-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div 
        className="relative overflow-hidden py-20 px-4 gradient-tiktok animate-gradient-shift"
        style={{ backgroundSize: '200% 200%' }}
      >
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 animate-pulse-slow">
            <span className="text-6xl">🎬</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
            Мой YouTube Канал
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
            Подписывайся на все соцсети и следи за новым контентом! 🔥
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover-lift"
            onClick={() => window.open('https://youtube.com/@yourchannel', '_blank')}
          >
            <Icon name="Youtube" className="mr-2" size={24} />
            Подписаться на YouTube
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Последние видео
          </h2>
          <p className="text-muted-foreground text-lg">
            Смотри самые свежие ролики прямо здесь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {youtubeVideos.map((videoId, index) => (
            <Card 
              key={videoId} 
              className="overflow-hidden hover-lift bg-card border-2 border-border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Найди меня в соцсетях
          </h2>
          <p className="text-muted-foreground text-lg">
            Подписывайся везде, где я есть! 🚀
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className={`p-6 text-center hover-lift cursor-pointer bg-card border-2 border-border transition-all duration-300 ${social.color}`}>
                <Icon name={social.icon as any} size={32} className="mx-auto mb-3" />
                <p className="font-semibold text-sm">{social.name}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>

      <footer className="py-8 px-4 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Мой YouTube Канал. Создано с ❤️ для подписчиков
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

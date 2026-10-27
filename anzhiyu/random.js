var posts=["posts/88e78966.html","posts/5693cd5c.html","posts/8d8b0eb2.html","posts/8d48c6a1.html","posts/4512133.html","posts/8331de3d.html","posts/7a776471.html","posts/acc595f5.html","posts/3d85b155.html","posts/c6c552a3.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://hexo.io/icon/apple-touch-icon-152x152.png","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://blog.anheyu.com/static/img/logo.svg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"/img/friends/anzhiyu.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"/img/friends/fomalhaut.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"/img/friends/anzhiyu.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"/img/friends/fomalhaut.webp","descr":"Future is now 🍭🍭🍭","recommend":true},{"name":"葱苓小筑","link":"https://blog.ciraos.top/","avatar":"/img/friends/ciraos.avif","descr":"a small blog station."},{"name":"王权富贵","link":"https://blog.w1f.top/","avatar":"/img/friends/wangquan.webp","descr":"岁月温柔，万物生长。","siteshot":"https://tu.w1f.top/file/1754228138583_image.png"},{"name":"小亮的部落阁","link":"https://blog.752132.xyz/","avatar":"/img/friends/xiaoliang.svg","descr":"欲望以提升热忱，毅力以磨平高山","siteshot":"https://z.wiki/u/2cXqKC"},{"name":"卖桃翁小窝","link":"https://ayakasuki.com","avatar":"https://tc.ayakasuki.com/a/2023/10/14/biji6529e8a16b6d7.png","descr":"一切向好，生活向阳","siteshot":"https://tc.ayakasuki.com/a/2025/06/11/biji68493e2b62bd0.png"},{"name":"东方月初","link":"https://blog.biuxin.com/","avatar":"/img/friends/biuxin.webp","descr":"分享有趣但又无聊的东西。","siteshot":"https://x.xinb.de/i/2024/09/23/930491.webp"},{"name":"Elykia","link":"https://blog.elykia.cn/","avatar":"/img/friends/elykia.webp","descr":"致以无暇之人","siteshot":"https://bu.dusays.com/2024/10/25/671b50dc2dd2b.png"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"/img/friends/meng-aichiyu.avif","descr":"不负心灵，不负今生。"},{"name":"大爱无痕","link":"https://blog.youngboy.top/","avatar":"/img/friends/daai.webp","descr":"心灵的栖居地，记录点滴生活","siteshot":"https://pic.superbed.cc/item/679dca48fa9f77b4dc57180d.jpg"},{"name":"辣条","link":"https://blog.owwo.fun","descr":"悠远的天空，在苍穹的尽头","avatar":"/img/friends/latiao.webp"},{"name":"胜天半子","link":"https://blog.291055.xyz/","avatar":"/img/friends/shengtian.webp","descr":"事已至此，先吃饭吧😋","siteshot":"https://i1.wp.com/ruom.wuaze.com/i/2024/11/08/350149.webp"},{"name":"ZERO开发","link":"https://www.zerofc.cn/","avatar":"/img/friends/zero.webp","descr":"一个持续探索副业的独立开发者博客"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
# Home2Trending
` youtube.com ` で Home から Trending にリダイレクトさせるChrome拡張機能  

## 使い方
1. ソースコードをダウンロードする
2. .zipを解凍する
3. ` chrome://extensions/ ` にアクセスする
4. デベロッパーモードをオンにする
5. ` パッケージ化されてない拡張機能を読み込む ` で解凍されたフォルダを選択する

## User CSS
自分が適応しているものを共有しておきます。  
```css
/* ホームボタンを表示しない */
a#endpoint.yt-simple-endpoint[href="/"] {
  display: none;
}

/* 音声検索ボタンを表示しない */
#voice-search-button {
  display: none;
}

/* YouTube Live コメント欄の注意書きを表示しない */
yt-live-chat-viewer-engagement-message-renderer {
  display: none;
}

/* サムネイルホバー時にオーバーレイを表示しない */
ytd-thumbnail-overlay-toggle-button-renderer {
  display: none;
}

/* https://www.youtube.com で何も表示させない */
ytd-app:has(+#home-page-skeleton) {
  display: none;
}
```

## おすすめの拡張機能
### No YouTube Shorts
YouTube Shorts 関係のアレコレをすべて非表示にしてくれる。  
https://chrome.google.com/webstore/detail/no-youtube-shorts/hjfkenebldkfgibelglepinlabpjfbll  

### uBlock Origin
オタク御用達、高機能かつ軽量な広告ブロッカー。  
https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl  

### Stylus
UserCSSを適応できる拡張機能。  
https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne  

### Stylebot
基本機能は上と同じだが、GUI操作で完結させられるこちらもおすすめ。  
もちろん自分で書けば細かいこともできる……が、SyntaxErrorが出たりする。  
https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha  

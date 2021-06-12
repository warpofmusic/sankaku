# sankaku
twitterで出した問題をjsでといたよ～

[ツイッターのリンク](https://twitter.com/mdFkg6BGFNtX8n4/status/1403691222498041861?ref_src=twsrc%5Etfw)

## 動かし方

BrowserSync](https://browsersync.io/)を使いたかったので、gulpから起動したかったのよ(汗)

そして、gulpfileを作り直すとめんどくさかったので、
src/からdist/にファイルを移動して、
dis/がドキュメントルートになるようにしています。

なので、
gulpを使うってどうこうがめんどくさければ、
自前のWEBサーバーにdist以下のフォルダをぶちまければ動きます。

### 一応：：nodeJSでコンパイルする。

コンパイルするほどのソースでもないけど、
[ソース全体をDLしてフォルダにぶちまける

2. nodeJSをインストールする。
3. コマンド(cmdとかターミナル)でソースをぶちまけたフォルダに移動
4. コマンドでnpm installを実行
5. コマンドでnpx gulp でブラウザが起動するからチェック

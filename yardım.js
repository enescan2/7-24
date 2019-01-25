const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
	    .setColor("ffffff")
        .setTitle("**Hüso BOT YARDIM KOMUTLARI**")
		.addField("__**Kullanıcı Komutları**__", "**-havadurumu**: Girdiğiniz şehrin günlük hava durumunu gösterir. \n **-kısalt**: Verdiğiniz linki kısaltır. \n **-şifre**: Belirtdiğiniz Miktardaki Uzunlukta Şifre Oluşturur. \n **-ping**: Botun Pingini Gösterir. \n **-avatar**: Profil Fotoğrafınızı Gösterir. \n **-hesapla**: Matematiksel İşlemler Yapar. \n **-servericon**: Sunucu Küçük Resmini Gösterir. \n **-sunucubilgi**: Bulunduğunuz sunucunun bilgilerini gösterir. \n **-kullanıcıbilgim**: Kullanıcı bilginizi gösterir.")
        .addField("__**Eğlence Komutları**__", "**-çayiç**: Bir bardak çay içersiniz. \n **-coolresim**: Havalı resimler gösterir. \n **-8ball**: Sorduğunuz Soruya Cevap Verir. \n **-slots**: Slots Oyunu Oynarsınız. \n **-stresçarkı**: Stres Çarkı Çevirirsiniz. \n **-fakemesaj**: Belirtdiğiniz kişinin botu yazdığınız mesajı gönderir [-fakemesaj <mesaj> @Kullanıcı].")
		.addField("__**Yetkili Komutları**__", "**-ban**: Belirtdiğiniz kişiyi sunucudan banlar. \n **-kick**: Belirtdiğiniz Kişiyi Sunucudan Atar[kick-listesi kanalı oluşturmanız lazım.]. \n **-yaz**: Belirtdiğiniz Yazıyı Bot Yazar. \n **-temizle**: Belirtdiğiniz Miktardaki Mesajı Siler.\n **-unban**: Belirtdiğiniz Kişinin Banını Açar. \n **-kilit**: Belirtdiğiniz süre boyunca kanalı kilitler. \n **-sustur**: Belirtdiğiniz kişiyi belirtdiğiniz süre susturur. \n **-uyar**: Belirtdiğiniz kişiyi belirtdiğiniz sebep için uyarır. \n **-duyur**: Yazdığınız mesajı DM'den tüm discord sunucunuzdaki üyelere gönderir. \n **-kayıtol**: Etiketlediğiniz kişiyi sunucuya kaydeder. [Üye Rolu Verir]")
        .addField("__**Bot Komutları**__", "**-davet**: Botun davet linkini verir. \n **-istatistik**: Botun istatistiklerini gösterir. \n **-öneri**: Bot geliştiricime öneri gönderir.  \n\n\n Developed And Protected By: Enes Erdoğan Can \n Botu Sunucunuza Eklemek İçin:  https://discordapp.com/oauth2/authorize?client_id=538273454089044018&scope=bot&permissions=805314622")
	message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};

/**
 * Created by huangchen on 2016/12/25.
 */
var common = {
    menu: {
        "首页": {
            icon: "home",
            class: "",
            link: "../other/index.html",
            sub: {}
        },
        "会员中心": {
            icon: "bookmark",
            class: "",
            link: "",
            sub: {
                "个人资料": {
                    icon: "",
                    class: "",
                    link: "../user/index.html",
                    sub: {}
                },
                "支付方式": {
                    icon: "",
                    class: "",
                    link: "../user/payment.html",
                    sub: {}
                },
                "密码修改": {
                    icon: "",
                    class: "",
                    link: "../user/password.html",
                    sub: {}
                },
                "密保修改": {
                    icon: "",
                    class: "",
                    link: "../user/protect.html",
                    sub: {}
                },
            }
        },
        "市场管理": {
            icon: "list-alt",
            class: "",
            link: "",
            sub: {
                "开通会员": {
                    icon: "",
                    class: "",
                    link: "../market/open.html",
                    sub: {}
                },
                "推荐系谱": {
                    icon: "",
                    class: "",
                    link: "../market/family.html",
                    sub: {}
                },
                "注册会员": {
                    icon: "",
                    class: "",
                    link: "../market/register.html",
                    sub: {}
                },
            }
        },
        "财务管理": {
            icon: "list",
            class: "",
            link: "",
            sub: {
                "本息明细": {
                    icon: "",
                    class: "",
                    link: "../manage/list.html",
                    sub: {}
                },
                "领导奖励明细": {
                    icon: "",
                    class: "",
                    link: "../manage/reward.html",
                    sub: {}
                },
                "激活／排单币转账": {
                    icon: "",
                    class: "",
                    link: "../manage/schedule.html",
                    sub: {}
                },
            }
        },
        "联系我们": {
            icon: "mobile",
            class: "",
            link: "../other/contact.html",
            sub: {}
        },
        "安全退出": {
            icon: "sign-out",
            class: "logout",
            link: "",
            sub: {}
        }
    },
    selfLink: "",
    showMenu: function () {
        //获取当前的link
        var pathname = window.location.pathname;
        console.log(pathname);
        var start = pathname.indexOf("FuckTheWorld/") + "FuckTheWorld/".length;
        common.selfLink = pathname.substr(start);
        console.log(common.selfLink);


        var menu = "";
        menu += '<div class="sideMenu am-u-sm-12 am-u-md-3 am-u-lg-2">';
        menu += '<div class="fixed" >';
        menu += '<img class="logo" src="http://pinwheel-cn.com/public/home/images/sas-logo.png">';

        $.each(common.menu, function (key, data) {
            if (data.link == "")
                data.link = "javascript:void(0);";
            if (data.icon == "")
                data.icon = "arrow-right";
            var link = data.link;
            if (link.indexOf("../") == 0)
                link = link.substr(3);
            if (link == common.selfLink)
                data.icon += " on";
            data.icon += " " + data.class;
            console.log(link);
            var icon = "";
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub))
                icon += "<em></em>";

            menu += '<h3 class="am-icon-' + data.icon + '">' + icon + '<a href="' + data.link + '">' + key + '</a></h3>';
            menu += ' <ul>';
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub)) {
                menu += common.getSubMenu(data.sub);
            }
            menu += '</ul>';
        });
        menu += "</div>";
        menu += "</div>";

        console.log(menu);
        $(".admin-main").prepend(menu);
        common.menuJs();
    },
    getSubMenu: function (sub) {
        var menu = "";
        $.each(sub, function (key, data) {
            if (data.link == "")
                data.link = "javascript:void(0);";
            if (data.icon == "")
                data.icon = "arrow-right";

            var link = data.link;
            var active = data.class;
            if (link.indexOf("../") == 0)
                link = link.substr(3);
            if (link == common.selfLink)
                active = ' active';
            menu += '<li>';
            menu += '<a href="' + data.link + '" class="' + active + '"><span class="am-icon-' + data.icon + '"></span>' + key + '</a>';
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub)) {
                menu += ' <ul>';
                menu += common.getSubMenu(data.sub);
                menu += '</ul>';
            }
            menu += '</li>';
        });
        return menu;
    },
    isEmptyObj: function (obj) {
        if (typeof (obj) != "object")
            return false;
        for (o in obj) {
            return false;
        }
        return true;
    },
    menuJs: function () {
        $(".sideMenu").find("h3").removeClass("on");
        $(".sideMenu").find("a").each(function () {
            if ($(this).hasClass("active")) {
                $(this).parent().parent().prev().addClass("on");
            }
        });

        jQuery(".sideMenu").slide({
            titCell: "h3", //鼠标触发对象
            targetCell: "ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
            effect: "slideDown", //targetCell下拉效果
            delayTime: 300, //效果时间
            triggerTime: 150, //鼠标延迟触发时间（默认150）
            defaultPlay: true,//默认是否执行效果（默认true）
            returnDefault: false //鼠标从.sideMen移走后返回默认状态（默认false）
        });

        //安全退出
        $(".sideMenu h3.logout").click(function (e) {


            window.location.href = "../index.html";
        });
    },
    showHeader: function () {
        var header = '<h1 class="am-topbar-brand">欢迎 <span class="nickname">ywt0111</span> 回来！请使用闲置资金！<span class="am-icon-list showMenu"></span></h1>';
        $("header").append(header);
        // header fixed补充高度
        // $("header").after('<div class="header-top"></div>');

        $("header").find("span.showMenu").click(function () {
            $(".sideMenu").toggleClass("active");
        });
    },
    showFooter: function () {
        var footer = "<footer>";
        footer += '<div data-am-widget="gotop" class="am-gotop am-gotop-fixed" >'
            + '<a href="#top" title="回到顶部">'
            + '<span class="am-gotop-title">回到顶部</span>'
            + '<i class="am-icon-btn am-icon-chevron-up am-active" style="margin-left:-25%;"></i>'
            + '</a>'
            + '</div>';
        footer += "</footer>";
        $(".admin-main").append(footer);
    },
    verifyForm: function () {
        $('form').validator({
            onValid: function (validity) {
                $(validity.field).closest('.am-form-group>div').find('.am-alert').hide();
            },
            onInValid: function (validity) {
                var $field = $(validity.field);
                var $group = $field.closest('.am-form-group>div');
                var $alert = $group.find('.am-alert');
                // 使用自定义的提示信息 或 插件内置的提示信息
                var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
                if (!$alert.length) {
                    $alert = $alert.hide().appendTo($group);
                }
                $alert.html(msg).show();
            }
        });
    },
    run: function () {
        this.showHeader();
        this.showMenu();
        this.showFooter();
        this.verifyForm();
    }
};
common.run();
 var model_res_users = new Model("res.users");
     model_res_users.call("has_group", ["module_name.group_name"]).done(function(can_export) {
     if (!can_export) {
          $('.dev_mode').hide()
      }
      })

exports.Calculate_size = function(list_size, hip_circ, waist_circ, bust_circ,
     person_hip_circ, person_waist_circ, person_bust_circ){

    var result_size_up=0
    var result_size_down=0

    var size_hip_circ= 0
    var size_waist_circ= 0
    var size_bust_circ= 0

    for (var i = 0; i < hip_circ.length; i++) {

        //شرط زیر برای چک کردن اینکه سایز وارد شده بزرگ تر یا کوچک تر از لیست سایز نباشد
        // if(hip_circ[hip_circ.length-1] < person_hip_circ || person_hip_circ < 40){
        //     size_hip_circ=100
        //     break;
        // }
        if(hip_circ[i]>=person_hip_circ){
            size_hip_circ=i
            break;
        }
    }
    for (var i = 0; i < waist_circ.length; i++){
        // if(waist_circ[waist_circ.length-1] < person_waist_circ || person_waist_circ < 40){
        //     size_waist_circ=100
        //     break;
        // }
        if(waist_circ[i]>=person_waist_circ){
            size_waist_circ=i
            break;
        }
    }
    for (var i = 0; i < bust_circ.length; i++){
        // if(bust_circ[bust_circ.length-1] < person_bust_circ || person_bust_circ < 40){
        //     size_bust_circ=100
        //     break;
        // }
        if(bust_circ[i]>=person_bust_circ){
            size_bust_circ=i
            break;
        }
    }

    var d_size_up=[size_hip_circ, size_waist_circ, size_bust_circ]
    var d_size_down=[size_hip_circ, size_waist_circ]

    // var max_d_size_up= 0
    // var min_d_size_up= 30

    // for (var i = 0; i < 3; i++){
    //     if(d_size_up[i]>max_d_size_up){
    //         max_d_size_up=d_size_up[i]
    //     }
    // }
    // for (var i = 0; i < 3; i++){
    //     if(d_size_up[i]<min_d_size_up){
    //         min_d_size_up=d_size_up[i]
    //     }
    // }

    // if (max_d_size_up != 100 && max_d_size_up-min_d_size_up == 0){
    //     result_size_up=max_d_size_up

    // }else if (max_d_size_up != 100 && max_d_size_up-min_d_size_up == 1){
    //     result_size_up=max_d_size_up

    // }else if (max_d_size_up != 100 && max_d_size_up-min_d_size_up > 1){
    //     result_size_up=max_d_size_up-1
    // }

    for (var i = 0; i < 3; i++){
        if(d_size_up[i]>result_size_up){
            result_size_up=d_size_up[i]
        }
    }

    for (var i = 0; i < 2; i++){
        if(d_size_down[i]>result_size_down){
            result_size_down=d_size_down[i]
        }
    }

    if (size_hip_circ != 0 && size_waist_circ != 0 && size_bust_circ != 0) {
        return [list_size[result_size_up],list_size[result_size_down]];
    } else {
        return [0,0];
    }

}
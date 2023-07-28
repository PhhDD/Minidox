function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[208.0890324,-143.0691826],"radius":2.5})
.union(
    CAG.circle({"center":[195.4171861,-108.253571],"radius":2.5})
).union(
    CAG.circle({"center":[266.4568948,-136.7767157],"radius":2.5})
).union(
    CAG.circle({"center":[253.4601293,-101.0683961],"radius":2.5})
).union(
    CAG.circle({"center":[125.1126752,-143.0691826],"radius":2.5})
).union(
    CAG.circle({"center":[137.7845215,-108.253571],"radius":2.5})
).union(
    CAG.circle({"center":[66.7448128,-136.7767157],"radius":2.5})
).union(
    CAG.circle({"center":[79.7415783,-101.0683961],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[208.0890324,-143.0691826],"radius":1.5})
.union(
    CAG.circle({"center":[195.4171861,-108.253571],"radius":1.5})
).union(
    CAG.circle({"center":[266.4568948,-136.7767157],"radius":1.5})
).union(
    CAG.circle({"center":[253.4601293,-101.0683961],"radius":1.5})
).union(
    CAG.circle({"center":[125.1126752,-143.0691826],"radius":1.5})
).union(
    CAG.circle({"center":[137.7845215,-108.253571],"radius":1.5})
).union(
    CAG.circle({"center":[66.7448128,-136.7767157],"radius":1.5})
).union(
    CAG.circle({"center":[79.7415783,-101.0683961],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[43.0835978,-134.5378684],[64.3639475,-76.0705883]]).appendArc([65.6156738,-74.8556698],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.504878,-67.6206765]).appendArc([87.8625397,-67.5379436],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.4645999,-64.7309983]).appendArc([109.4186373,-64.8333046],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.8615793,-73.729808]).appendArc([134.6581757,-74.2646803],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.6065512,-89.6252442]).appendArc([148.947379,-89.9241532],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6370809,-100.1123174]).appendArc([164.3766574,-102.4397796],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.2636149,-110.9927932]).appendArc([163.1430002,-113.6768334],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.0587074,-113.6768334]).appendArc([171.9380927,-110.9927932],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.8250503,-102.4397796]).appendArc([169.5646267,-100.1123174],{"radius":2,"clockwise":true,"large":false}).appendPoint([184.2543285,-89.9241532]).appendArc([184.5951564,-89.6252442],{"radius":2,"clockwise":false,"large":false}).appendPoint([198.5435319,-74.2646802]).appendArc([199.3401283,-73.729808],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.7830703,-64.8333047]).appendArc([224.7371077,-64.7309983],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.3391679,-67.5379435]).appendArc([245.6968297,-67.6206765],{"radius":2,"clockwise":true,"large":false}).appendPoint([267.5860338,-74.8556698]).appendArc([268.8377601,-76.0705883],{"radius":2,"clockwise":true,"large":false}).appendPoint([290.1181098,-134.5378684]).appendArc([289.1051466,-137.0244937],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.1241064,-168.2579761]).appendArc([223.2273064,-169.1166078],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.0945226,-204.8549683]).appendArc([201.4233195,-205.6930279],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.0837685,-188.1961528]).appendPoint([166.1179391,-188.1961528]).appendPoint([131.7783881,-205.6930279]).appendArc([129.1071851,-204.8549683],{"radius":2,"clockwise":true,"large":false}).appendPoint([109.9744013,-169.1166077]).appendArc([109.0776012,-168.2579761],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.096561,-137.0244937]).appendArc([43.0835977,-134.5378684],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlboard_extrude_4_outline_fn(){
    return new CSG.Path2D([[43.0835978,-134.5378684],[64.3639475,-76.0705883]]).appendArc([65.6156738,-74.8556698],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.504878,-67.6206765]).appendArc([87.8625397,-67.5379436],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.4645999,-64.7309983]).appendArc([109.4186373,-64.8333046],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.8615793,-73.729808]).appendArc([134.6581757,-74.2646803],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.6065512,-89.6252442]).appendArc([148.947379,-89.9241532],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6370809,-100.1123174]).appendArc([164.3766574,-102.4397796],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.2636149,-110.9927932]).appendArc([163.1430002,-113.6768334],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.0587074,-113.6768334]).appendArc([171.9380927,-110.9927932],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.8250503,-102.4397796]).appendArc([169.5646267,-100.1123174],{"radius":2,"clockwise":true,"large":false}).appendPoint([184.2543285,-89.9241532]).appendArc([184.5951564,-89.6252442],{"radius":2,"clockwise":false,"large":false}).appendPoint([198.5435319,-74.2646802]).appendArc([199.3401283,-73.729808],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.7830703,-64.8333047]).appendArc([224.7371077,-64.7309983],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.3391679,-67.5379435]).appendArc([245.6968297,-67.6206765],{"radius":2,"clockwise":true,"large":false}).appendPoint([267.5860338,-74.8556698]).appendArc([268.8377601,-76.0705883],{"radius":2,"clockwise":true,"large":false}).appendPoint([290.1181098,-134.5378684]).appendArc([289.1051466,-137.0244937],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.1241064,-168.2579761]).appendArc([223.2273064,-169.1166078],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.0945226,-204.8549683]).appendArc([201.4233195,-205.6930279],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.0837685,-188.1961528]).appendPoint([166.1179391,-188.1961528]).appendPoint([131.7783881,-205.6930279]).appendArc([129.1071851,-204.8549683],{"radius":2,"clockwise":true,"large":false}).appendPoint([109.9744013,-169.1166077]).appendArc([109.0776012,-168.2579761],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.096561,-137.0244937]).appendArc([43.0835977,-134.5378684],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[45.6408836,-133.3593922],[65.5592924,-78.6340138]]).appendArc([66.8110187,-77.4190953],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.7002229,-70.184102]).appendArc([89.0578846,-70.1013691],{"radius":2,"clockwise":true,"large":false}).appendPoint([109.6599448,-67.2944238]).appendArc([110.6139822,-67.3967301],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.2981538,-74.9251529]).appendArc([132.0947502,-75.4600252],{"radius":2,"clockwise":true,"large":false}).appendPoint([146.0431257,-90.8205891]).appendArc([146.3839535,-91.1194981],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.0736553,-101.3076623]).appendArc([161.8132319,-103.6351245],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.3842297,-110.3087529]).appendArc([161.2636149,-112.9927931],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.9380927,-112.9927931]).appendArc([173.817478,-110.3087529],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.3884758,-103.6351245]).appendArc([172.1280522,-101.3076623],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.817754,-91.1194981]).appendArc([187.1585819,-90.8205891],{"radius":2,"clockwise":false,"large":false}).appendPoint([201.1069574,-75.4600251]).appendArc([201.9035538,-74.9251529],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.5877253,-67.3967302]).appendArc([223.5417628,-67.2944238],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.143823,-70.101369]).appendArc([244.5014848,-70.184102],{"radius":2,"clockwise":true,"large":false}).appendPoint([266.3906889,-77.4190953]).appendArc([267.6424152,-78.6340138],{"radius":2,"clockwise":true,"large":false}).appendPoint([287.560824,-133.3593922]).appendArc([286.565676,-135.8373456],{"radius":2,"clockwise":true,"large":false}).appendPoint([221.2829674,-168.0158208]).appendArc([220.4144346,-168.8465115],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.3380735,-201.7399549]).appendArc([199.6773225,-202.5587455],{"radius":2,"clockwise":true,"large":false}).appendPoint([171.0925927,-187.9940982]).appendArc([170.1846117,-187.7761112],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.0170959,-187.7761112]).appendArc([162.1091149,-187.9940982],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.5243851,-202.5587455]).appendArc([130.8636341,-201.7399549],{"radius":2,"clockwise":true,"large":false}).appendPoint([112.787273,-168.8465115]).appendArc([111.9187402,-168.0158207],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.6360316,-135.8373455]).appendArc([45.6408835,-133.3593922],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function xlbottom_case_fn() {
                    

                // creating part 0 of case xlbottom
                let xlbottom__part_0 = xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlbottom__part_0_bounds = xlbottom__part_0.getBounds();
                let xlbottom__part_0_x = xlbottom__part_0_bounds[0].x + (xlbottom__part_0_bounds[1].x - xlbottom__part_0_bounds[0].x) / 2
                let xlbottom__part_0_y = xlbottom__part_0_bounds[0].y + (xlbottom__part_0_bounds[1].y - xlbottom__part_0_bounds[0].y) / 2
                xlbottom__part_0 = translate([-xlbottom__part_0_x, -xlbottom__part_0_y, 0], xlbottom__part_0);
                xlbottom__part_0 = rotate([0,0,0], xlbottom__part_0);
                xlbottom__part_0 = translate([xlbottom__part_0_x, xlbottom__part_0_y, 0], xlbottom__part_0);

                xlbottom__part_0 = translate([0,0,0], xlbottom__part_0);
                let result = xlbottom__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerwall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerwall_case_fn() {
                    

                // creating part 0 of case _outerwall
                let _outerwall__part_0 = xlboard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerwall__part_0_bounds = _outerwall__part_0.getBounds();
                let _outerwall__part_0_x = _outerwall__part_0_bounds[0].x + (_outerwall__part_0_bounds[1].x - _outerwall__part_0_bounds[0].x) / 2
                let _outerwall__part_0_y = _outerwall__part_0_bounds[0].y + (_outerwall__part_0_bounds[1].y - _outerwall__part_0_bounds[0].y) / 2
                _outerwall__part_0 = translate([-_outerwall__part_0_x, -_outerwall__part_0_y, 0], _outerwall__part_0);
                _outerwall__part_0 = rotate([0,0,0], _outerwall__part_0);
                _outerwall__part_0 = translate([_outerwall__part_0_x, _outerwall__part_0_y, 0], _outerwall__part_0);

                _outerwall__part_0 = translate([0,0,0], _outerwall__part_0);
                let result = _outerwall__part_0;
                
            
                    return result;
                }
            
            

                function _innerwall_case_fn() {
                    

                // creating part 0 of case _innerwall
                let _innerwall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerwall__part_0_bounds = _innerwall__part_0.getBounds();
                let _innerwall__part_0_x = _innerwall__part_0_bounds[0].x + (_innerwall__part_0_bounds[1].x - _innerwall__part_0_bounds[0].x) / 2
                let _innerwall__part_0_y = _innerwall__part_0_bounds[0].y + (_innerwall__part_0_bounds[1].y - _innerwall__part_0_bounds[0].y) / 2
                _innerwall__part_0 = translate([-_innerwall__part_0_x, -_innerwall__part_0_y, 0], _innerwall__part_0);
                _innerwall__part_0 = rotate([0,0,0], _innerwall__part_0);
                _innerwall__part_0 = translate([_innerwall__part_0_x, _innerwall__part_0_y, 0], _innerwall__part_0);

                _innerwall__part_0 = translate([0,0,0], _innerwall__part_0);
                let result = _innerwall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlbottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        
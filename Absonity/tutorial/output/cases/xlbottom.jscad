function xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[43.0835978,-134.5378684],[64.3639475,-76.0705883]]).appendArc([65.6156738,-74.8556698],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.504878,-67.6206765]).appendArc([87.8625397,-67.5379436],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.4645999,-64.7309983]).appendArc([109.4186373,-64.8333046],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.8615793,-73.729808]).appendArc([134.6581757,-74.2646803],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.6065512,-89.6252442]).appendArc([148.947379,-89.9241532],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.6370809,-100.1123174]).appendArc([164.3766574,-102.4397796],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.2636149,-110.9927932]).appendArc([163.1430002,-113.6768334],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.0587074,-113.6768334]).appendArc([171.9380927,-110.9927932],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.8250503,-102.4397796]).appendArc([169.5646267,-100.1123174],{"radius":2,"clockwise":true,"large":false}).appendPoint([184.2543285,-89.9241532]).appendArc([184.5951564,-89.6252442],{"radius":2,"clockwise":false,"large":false}).appendPoint([198.5435319,-74.2646802]).appendArc([199.3401283,-73.729808],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.7830703,-64.8333047]).appendArc([224.7371077,-64.7309983],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.3391679,-67.5379435]).appendArc([245.6968297,-67.6206765],{"radius":2,"clockwise":true,"large":false}).appendPoint([267.5860338,-74.8556698]).appendArc([268.8377601,-76.0705883],{"radius":2,"clockwise":true,"large":false}).appendPoint([290.1181098,-134.5378684]).appendArc([289.1051466,-137.0244937],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.1241064,-168.2579761]).appendArc([223.2273064,-169.1166078],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.0945226,-204.8549683]).appendArc([201.4233195,-205.6930279],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.0837685,-188.1961528]).appendPoint([166.1179391,-188.1961528]).appendPoint([131.7783881,-205.6930279]).appendArc([129.1071851,-204.8549683],{"radius":2,"clockwise":true,"large":false}).appendPoint([109.9744013,-169.1166077]).appendArc([109.0776012,-168.2579761],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.096561,-137.0244937]).appendArc([43.0835977,-134.5378684],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlbottom_case_fn();
            }

        
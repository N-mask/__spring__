package com.myprojecy.alpine;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Background;

@Route("/")
public class demoLayout extends com.vaadin.flow.component.orderedlayout.VerticalLayout {
	private static final long serialVersionUID = 2941347691437351255L;
	private static int i = 0;

	public demoLayout() {

		Button button = new Button("Press me !");
		button.addSingleClickListener(e -> {
			System.out.println("Pressed button: " + (i++));
		});
		button.addThemeName(Background.SHADE_70);
		add(button);
		getStyle().set("background-color", "black");
	}
}
